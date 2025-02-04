import db from "$lib/server/initdb.js"

export async function GET({ params }) {
    const user = await db("users").where("userId", params.id).first();
    
    if (user) {
        return new Response(JSON.stringify(user), { status: 200 });
    } else {
        return new Response("User not found", { status: 404 });
    }
}
