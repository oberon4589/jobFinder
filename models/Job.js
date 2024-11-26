const Sequelize = require("sequelize");
const database = require("../database/connection");

//Cria o model
const Job = db.define("job", {
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
