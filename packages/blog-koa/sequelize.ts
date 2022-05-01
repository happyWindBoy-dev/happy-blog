const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("koadb", "root", "xxj199889", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then((res: any) => {
    console.log("MYSQL connect successfully", res);
  })
  .catch((err: any) => {
    console.error("Mysql connect error:", err);
  });

sequelize.sync();

module.exports = sequelize;
