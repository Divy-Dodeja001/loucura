export async function GET() {
  try {
    const IG_USER_ID = process.env.IG_USER_ID;
    let ACCESS_TOKEN = process.env.IG_LONG_TOKEN;

    const buildUrl = (token) =>
      `https://graph.facebook.com/v19.0/${IG_USER_ID}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${token}`;

    // 1️⃣ First attempt
    let res = await fetch(buildUrl(ACCESS_TOKEN));
    let data = await res.json();

    // 2️⃣ If token expired → refresh
    if (data.error?.code === 190) {
      console.log("Token expired → refreshing");

      await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/refresh-instagram-token`,
      );

      // wait 1 sec for env update
      await new Promise((r) => setTimeout(r, 1000));

      // use updated token
      ACCESS_TOKEN = process.env.IG_LONG_TOKEN;

      // retry request
      res = await fetch(buildUrl(ACCESS_TOKEN));
      data = await res.json();
    }

    // 3️⃣ Still failing?
    if (!res.ok) {
      return Response.json({ error: data }, { status: 400 });
    }

    return Response.json({
      success: true,
      posts: data.data,
    });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
