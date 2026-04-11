import { error, json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import type { RequestHandler } from "./$types";

// This route must run at request time — it reads query params from the
// TikTok OAuth redirect and performs a server-to-server token exchange
// using credentials that must not be exposed to the browser.
export const prerender = false;

const TOKEN_URL =
  "https://business-api.tiktok.com/open_api/v1.3/oauth2/access_token/";

interface TikTokTokenResponse {
  code: number;
  message: string;
  request_id: string;
  data?: {
    access_token: string;
    scope: number[];
    advertiser_ids: string[];
  };
}

export const GET: RequestHandler = async ({ url, fetch }) => {
  const oauthError = url.searchParams.get("error");
  if (oauthError) {
    const description =
      url.searchParams.get("error_description") ?? oauthError;
    error(400, `TikTok OAuth error: ${description}`);
  }

  // TikTok Business sends the authorization code as `auth_code`, but we
  // also accept the standard `code` parameter for flexibility.
  const authCode =
    url.searchParams.get("auth_code") ?? url.searchParams.get("code");
  const state = url.searchParams.get("state");

  if (!authCode) {
    error(400, "Missing auth_code in TikTok OAuth callback");
  }

  const appId = env.TIKTOK_APP_ID;
  const secret = env.TIKTOK_APP_SECRET;

  if (!appId || !secret) {
    error(
      500,
      "Server is missing TIKTOK_APP_ID or TIKTOK_APP_SECRET environment variables",
    );
  }

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      app_id: appId,
      secret,
      auth_code: authCode,
    }),
  });

  const payload = (await response.json().catch(() => null)) as
    | TikTokTokenResponse
    | null;

  if (!response.ok || !payload || payload.code !== 0 || !payload.data) {
    const message =
      payload?.message ?? `Token exchange failed (HTTP ${response.status})`;
    error(response.ok ? 502 : response.status, message);
  }

  return json({
    state,
    request_id: payload.request_id,
    access_token: payload.data.access_token,
    scope: payload.data.scope,
    advertiser_ids: payload.data.advertiser_ids,
  });
};
