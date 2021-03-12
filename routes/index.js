const posts = require('./post.route');
const welcome = require("./welcome.route");

module.exports.initRoutes = (app) => {
    app.use("/", welcome);
    app.use('/api/posts', posts)
}