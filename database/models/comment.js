'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreighKey: 'userId',
        as: 'author',
      });

      this.belongsTo(models.Post, {
        foreighKey: 'postId',
        as: 'post',
      })
    }
  };
  Comment.init({
    comment: DataTypes.TEXT,
    postId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};