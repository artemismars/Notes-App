require("dotenv").config();

const development = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  dialect: process.env.DIALECT,
  ssl: {
    rejectUnauthorized: true,
  },
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    },
  },
};
const test = {
  username: "root",
  password: null,
  database: "database_test",
  host: "127.0.0.1",
  dialect: "mysql",
};
const production = {
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  dialect: process.env.DIALECT,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    },
  },
};

module.exports = { development, test, production };
