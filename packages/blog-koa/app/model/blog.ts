const { Sequelize, DataTypes } = require('sequelize');
const sqlClient = require('../../sequelize');

const Blog = sqlClient.define(
  'blog',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    author: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    html_content: {
      type: Sequelize.STRING,
    },
    markdown_content: {
      type: Sequelize.STRING,
    },
    cover_img_url: {
      type: Sequelize.STRING,
      defaultValue: 'https://www.taskade.com/images/wallpapers/0052.jpg',
    },
  },
  {
    tableName: 'tbl_blog_2',
    freezeTableName: true,
  }
);

export { Blog };
