require("dotenv").config();
const testDbConnection = require("./db/testConnection");

module.exports = (phase, { defaultConfig }) => {
  // testDbConnection();

  return {
    env: {
      API_HOST: process.env.API_HOST,
      API_PORT: process.env.API_PORT,
    },
  };
};
