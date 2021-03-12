const express = require("express");

const { initRoutes } = require("./routes");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

initRoutes(app);

app.listen(port, () => console.log(`Listining on port ${port}!`));
