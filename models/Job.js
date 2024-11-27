const Sequelize = require("sequelize");
const database = require("../database/connection.js");

//Cria o model
const Job = database.define("job", {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  salary: {
    type: Sequelize.STRING,
  },
  company: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  hiring: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Job;
