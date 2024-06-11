const express = require("express"); //importa o express para podermos montar nossa api
app = express();
const database = require("./database/database"); //importa o banco de dados pra aplicação
const port = 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
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
