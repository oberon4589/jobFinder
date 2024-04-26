const sequelize = require("sequelize"); //exporta o sequelize pra podermos usar banco de dados

const sequelize = new sequelize({
  dialect: "sqlite", //tipo de banco de dados
  storage: "./database/databse.js", // localização do banco de dados
});

module.exports = sequelize;
