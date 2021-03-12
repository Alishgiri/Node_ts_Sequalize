const posts = require('./posts.route');
const users = require('./users.route');
const welcome = require("./welcome.route");
const comments = require('./comments.route');

module.exports.initRoutes = (app) => {
    app.use("/", welcome);
    app.use('/api/posts', posts)
    app.use('/api/users', users)
    app.use('/api/comments', comments)
}