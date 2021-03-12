const welcome = require("./welcome.route");

module.exports.initRoutes = (app) => {
    app.use("/", welcome);
}