const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite", //qual tipo de banco de dados
  storage: "./database/app.db", //onde o banco de dados vai ser armazenado
});

module.exports = sequelize;
