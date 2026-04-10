import { NextRequest, NextResponse } from "next/server";

/**
 * GET /api/tiktok/callback
 *
 * Handles the OAuth 2.0 callback from TikTok after user authorization.
 * Exchanges the authorization code for an access token.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const authCode = searchParams.get("auth_code");
  const state = searchParams.get("state");

  // Verify state parameter to prevent CSRF attacks
  const storedState = request.cookies.get("tiktok_oauth_state")?.value;

  if (!state || state !== storedState) {
    return NextResponse.json(
      { error: "Invalid state parameter. Possible CSRF attack." },
      { status: 403 }
    );
  }

  if (!authCode) {
    return NextResponse.json(
      { error: "No authorization code received from TikTok." },
      { status: 400 }
    );
  }

  const appId = process.env.TIKTOK_APP_ID;
  const appSecret = process.env.TIKTOK_APP_SECRET;

  if (!appId || !appSecret) {
    return NextResponse.json(
      { error: "Missing TikTok API credentials in environment." },
      { status: 500 }
    );
  }

  try {
    // Exchange authorization code for access token
    const tokenResponse = await fetch(
      "https://business-api.tiktok.com/open_api/v1.3/oauth2/access_token/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          app_id: appId,
          secret: appSecret,
          auth_code: authCode,
        }),
      }
    );

    const tokenData = await tokenResponse.json();

    if (tokenData.code !== 0) {
      return NextResponse.json(
        {
          error: "Failed to exchange authorization code",
          details: tokenData.message,
        },
        { status: 400 }
      );
    }

    const { access_token, advertiser_ids } = tokenData.data;

    // In production, store the access token securely in your database
    // associated with the user's session. Never expose it to the client.
    console.log("TikTok connected successfully:", {
      advertiserCount: advertiser_ids?.length ?? 0,
    });

    // Clear the state cookie
    const response = NextResponse.redirect(
      new URL("/?connected=true", request.url)
    );
    response.cookies.delete("tiktok_oauth_state");

    // Set a session cookie indicating successful connection
    response.cookies.set("tiktok_connected", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 86400, // 24 hours
      path: "/",
    });

    // Store token info in a secure session cookie (encrypted in production)
    response.cookies.set(
      "tiktok_session",
      JSON.stringify({
        access_token,
        advertiser_ids,
        connected_at: new Date().toISOString(),
      }),
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 86400,
        path: "/",
      }
    );

    return response;
  } catch (error) {
    console.error("TikTok OAuth callback error:", error);
    return NextResponse.json(
      { error: "Failed to complete TikTok authorization" },
      { status: 500 }
    );
  }
}
