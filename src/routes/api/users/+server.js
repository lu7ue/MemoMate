import db from "$lib/server/initdb.js"

export async function GET() {
    const users = await db("users").select("*");
    return new Response(JSON.stringify(users), { status: 200 });
}
