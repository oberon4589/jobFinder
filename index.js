const express = require("express"); //importa o express para podermos montar nossa api
app = express();
const db = require("./database/databsase"); //importa o banco de dados pra aplicação

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080");
});

//conexão com o banco
database
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o banco de dados");
  })
  .catch((err) => {
    console.log("Erro ao conectar com o banco");
  });

//rotas
app.get("/", (req, res) => {
  res.send("Hello World!");
});
