import { NextResponse } from "next/server";

/**
 * GET /api/tiktok/connect
 *
 * Initiates the TikTok OAuth 2.0 authorization flow.
 * Redirects the user to TikTok's authorization page where they can
 * grant our agency access to their ad account data.
 */
export async function GET(request: Request) {
  const appId = process.env.TIKTOK_APP_ID;
  const redirectUri = process.env.TIKTOK_REDIRECT_URI;

  if (!appId || !redirectUri) {
    return NextResponse.json(
      {
        error: "Missing TikTok API configuration",
        message:
          "Set TIKTOK_APP_ID and TIKTOK_REDIRECT_URI environment variables.",
      },
      { status: 500 }
    );
  }

  // Generate a random state parameter for CSRF protection
  const state = crypto.randomUUID();

  // Store state in a cookie for verification on callback
  const { origin } = new URL(request.url);
  const authUrl = new URL("https://business-api.tiktok.com/portal/auth");

  authUrl.searchParams.set("app_id", appId);
  authUrl.searchParams.set("state", state);
  authUrl.searchParams.set("redirect_uri", redirectUri || `${origin}/api/tiktok/callback`);
  authUrl.searchParams.set("rid", crypto.randomUUID());

  const response = NextResponse.redirect(authUrl.toString());

  // Set state cookie for CSRF validation on callback
  response.cookies.set("tiktok_oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 600, // 10 minutes
    path: "/",
  });

  return response;
}
