const { Sequelize, DataTypes } = require("sequelize");
const sqlClient = require("../../sequelize.ts");

const Blog = sqlClient.define(
  "blog",
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
  },
  {
    tableName: "tbl_blog_2",
    freezeTableName: true,
  }
);

export { Blog };
