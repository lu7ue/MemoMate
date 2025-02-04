/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const development = {
  client: 'sqlite3',
  connection: {
    filename: "./src/lib/database/memomate.db"
  },
  useNullAsDefault: true,
  migrations: {
    directory: "./migrations"
  },
  seeds: {
    directory: "./seeds"
  }
};

export default development;
