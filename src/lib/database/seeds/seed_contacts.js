export async function seed(knex) {
    // Delete all existing entries
    await knex("contacts").del();

    // Insert seed data
    await knex("contacts").insert([
        {
            contactId: 1,
            userId: 1, // Foreign key to Users table
            name: "Alice Johnson",
            gender: "female",
            birthday: "1990-05-15",
            email: "alice@example.com",
            phoneNumer: "123-456-7890",
            avatar: "alice-avatar.png"
        },
        {
            contactId: 2,
            userId: 1, // Foreign key to Users table
            name: "Bob Smith",
            gender: "male",
            birthday: "1985-08-20",
            email: "bob@example.com",
            phoneNumer: "987-654-3210",
            avatar: "bob-avatar.png"
        },
        {
            contactId: 3,
            userId: 2, // Foreign key to Users table
            name: "Charlie Brown",
            gender: "non-binary",
            birthday: "2000-12-01",
            email: "charlie@example.com",
            phoneNumer: "456-789-1234",
            avatar: "charlie-avatar.png"
        }
    ]);
}
