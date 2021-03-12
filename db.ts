const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres://user:pass@example.com:5432/dbname");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err: any) => {
    console.error("Unable to connect to the database", err);
  });

module.exports = { sequelize };
