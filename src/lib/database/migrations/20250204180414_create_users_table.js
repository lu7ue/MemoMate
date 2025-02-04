/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("users", (table) => {
        table.increments("userId").primary();
        table.string("userName").notNullable();
        table.string("password").notNullable();
        table.string("email").notNullable();
        table.string("avatar");
        table.string("pinCode").nullable();
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable("users");
}
