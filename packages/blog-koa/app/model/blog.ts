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
    content: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
  },
  {
    tableName: "tbl_blog",
    freezeTableName: true,
  }
);

export { Blog };
