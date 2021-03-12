const models = require('../database/models');

module.exports.getAllPosts = async (req, res) => {
    try {
        const posts = await models.Post.findAll({
            include: [
                // { model: models.Comment, as: 'comments' },
                { model: models.User, as: 'author' }
            ]
        });
        return res.send(posts)
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }
}

module.exports.createPost = async (req, res) => {
    try {
        const post = await models.Post.create(req.body);
        return res.status(201).json({ post });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
}