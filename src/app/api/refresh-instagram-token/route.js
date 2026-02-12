export async function GET() {
  try {
    // Step 1 — Request new token from Meta
    const refreshUrl = `https://graph.facebook.com/v19.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.IG_APP_ID}&client_secret=${process.env.IG_APP_SECRET}&fb_exchange_token=${process.env.IG_LONG_TOKEN}`;

    const igRes = await fetch(refreshUrl);
    const igData = await igRes.json();

    if (!igData.access_token) {
      return Response.json({ error: igData }, { status: 400 });
    }

    const NEW_TOKEN = igData.access_token;

    // Step 2 — Update Vercel ENV variable
    await fetch(
      `https://api.vercel.com/v9/projects/${process.env.VERCEL_PROJECT_ID}/env`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: "IG_LONG_TOKEN",
          value: NEW_TOKEN,
          target: ["production"],
        }),
      },
    );

    return Response.json({
      success: true,
      message: "Token refreshed successfully",
      expires_in: igData.expires_in,
    });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
