const sequelize = require("sequelize"); //exporta o sequelize pra podermos usar banco de dados

const sequelizes = new sequelize({
  dialect: "sqlite", //tipo de banco de dados
  storage: "./database/database.js", // localização do banco de dados
});

module.exports = sequelizes;
