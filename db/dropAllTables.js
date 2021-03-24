const sequelize = require(".");

sequelize
  .drop()
  .then(() => {
    console.log("All tables dropped.");
  })
  .catch((error) => {
    console.error("Unable to drop all tables:", error);
  });
