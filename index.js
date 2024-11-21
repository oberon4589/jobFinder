const express = require("express"); //Importa o express para criação das rotas
const app = express();
const port = 8080; //Variavel pra armazenar a porta onde o servidor vai rodar
const database = require ("./database/connection.js");

//Rotas
app.get("/", (req, res) => {
  res.send("Olá mundo!");
});

//conexão com o banco de dados
database
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o banco de dados!");
  })
  .catch(() => {
    console.log("Erro ao conectar ao banco de dados", err);
  });

//Starta o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
