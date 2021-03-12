require('dotenv').config();

const { DB_DEV_URL, DB_TEST_URL, DB_PROD_URL } = process.env;

module.exports = {
  "development": {
    url: DB_DEV_URL,
    dialect: "postgres"
  },
  "test": {
    url: DB_TEST_URL,
    dialect: "postgres"
  },
  "production": {
    url: DB_PROD_URL,
    dialect: "postgres"
  }
}
