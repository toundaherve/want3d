const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:Futurefuture1!@want3d.cq4cqradygxj.eu-west-2.rds.amazonaws.com:5432/want3d"
);

export default sequelize;
