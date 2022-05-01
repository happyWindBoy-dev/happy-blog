require("reflect-metadata");
require("./sequelize");
const { createKoaServer } = require("routing-controllers");
const { ArticleController } = require("./app/controller/blog");

const app = createKoaServer({
  cors: true,
  routePrefix: "/api",
  controllers: [ArticleController],
});

app.listen(4000);
console.log("listen 4000");
