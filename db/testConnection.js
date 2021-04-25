const sequelize = require("./");

module.exports = function testDbConnection() {
  sequelize
    .authenticate()
    .then(() =>
      console.log("Database connection has been established successfully.")
    )
    .catch((error) => {
      console.error("Unable to connect to database:", error);
      process.exit(1);
    });
};
