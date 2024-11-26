const express = require("express");
const router = express.Router();
const database = require("../database/connection");

router.get("/test", (req, res) => {
  console.log("Deu certo!");
});

//adiciona job via post
router.post("/add", (req, res) => {
  let { title, salary, company, description, email, hiring } = req.body;

  //create é um metodo do sequelize que insere dados no banco
  Job.create({
    title,
    salary,
    company,
    description,
    email,
    hiring,
  })
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
});

module.exports = router;
