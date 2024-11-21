# Portal de Procura de Emprego

Este é um projeto de portal de procura de emprego desenvolvido em Node.js. Ele inclui uma API com rotas para lidar com diversas funcionalidades relacionadas à busca de emprego. O projeto utiliza SQLite como banco de dados e integra o body-parser com Handlebars para manipulação de dados e renderização de templates.

## Requisitos

Certifique-se de ter o Node.js instalado no seu sistema. Você pode baixá-lo e instalá-lo a partir do [site oficial do Node.js](https://nodejs.org/).

<div align="center">
  <img height="200" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"  />
</div>

## Tecnologias usadas:

<p>Algumas das tecnologias que foram usadas neste projeto, podendo futuramente ter o uso de outras.</p>

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" height="40" alt="sqlite logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg" height="40" alt="handlebars logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" alt="express logo"  />
</div>

###

###

## Instalação

1. Clone este repositório para o seu sistema:

```bash
  git clone 'https://github.com/oberon4589/jobFinder'
```

3. Navegue até o diretório do projeto.

```bash
  cd/diretorio/do/seu/projeto
```

4. Instale as depêndias do projeto:

```bash
  npm install express body-parser sqlite3 handlebars express-handlebars sequelize
```

## Configuração do Banco de Dados

Este projeto utiliza o SQLite como banco de dados. Certifique-se de que o arquivo `database.db` está presente no diretório raiz do projeto. Se não estiver, você pode criar um novo banco de dados SQLite usando qualquer ferramenta de gerenciamento de banco de dados SQLite.

## Uso

Para iniciar o servidor, execute o seguinte comando:

```bash
  node index.js
```

Isso iniciará o servidor na porta padrão 8080.

## Rotas da API

A API inclui as seguintes rotas:

- `GET /`
- `POST /`
- `GET /`
- `PUT /`
- `DELETE /`

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um PR ou uma issue para discutir novos recursos, correções de bugs ou melhorias no código existente.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
