const models = require('../database/models');

module.exports.createComment = async (req, res) => {
    try {
        const post = await models.Comment.create(req.body);
        return res.status(201).json({ post });
    } catch (e) {
        return res.status(500).json({ error: error.message });
    }
}