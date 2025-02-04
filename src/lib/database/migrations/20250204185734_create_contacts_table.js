/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable("contacts", (table) => {
        table.increments("contactId").primary();
        table.integer("userId").notNullable().references("userId").inTable("Users");
        table.string("name").notNullable();
        table.enu("gender", ["female", "male", "non-binary"]).notNullable();
        table.date("birthday");
        table.string("email");
        table.string("phoneNumer");
        table.string("avatar");
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable("contacts");
}
