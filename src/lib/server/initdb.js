import knex from 'knex';
import development from "$lib/database/knexfile.js";

const db = knex(development);
export default db;

export async function getUsers() {
    return await db("users").select("*");
}

// Initialize the database (run migrations & seeds)
export async function initDB() {
    console.log("Running migrations...");
    await db.migrate.latest();
    console.log("Seeding database...");
    await db.seed.run();
}
