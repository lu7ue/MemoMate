export async function seed(knex) {
    await knex("users").del(); // Clear existing data
    await knex("users").insert([
        { userName: "JohnDoe", password: "1234", email: "john@example.com", avatar: "avatar1.png" },
        { userName: "JaneDoe", password: "5678", email: "jane@example.com", avatar: "avatar2.png" }
    ]);
}
