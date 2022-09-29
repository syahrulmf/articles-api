const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.host,
      database: config.host,
      user: config.host,
      password: config.host,
      schema: config.host,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
