const models = require('../database/models');

module.exports.createPost = async (req, res) => {
    try {
        const post = await models.Post.create(req.body);
        return res.status(201).json({ post });
    } catch (e) {
        return res.status(500).json({ error: error.message });
    }
}