# NOTEBOOK CRAWLER

## Sobre

O projeto é um webcrawler construído com node.js e puppeteer.js que consome o site [webscraper.io](https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops) na seção de notebooks, coleta os dados e aplica um filtro determinado pelo usuário.
## Motivações
O uso de puppeteer.js, node.js, postgreSQL e heroku foram motivados pela familiaridade (puppeteer e node) e curiosidade (heroku e postgreSQL).

## Problemas
Tentei usar o docker e aws para deploy do projeto, porém encontrei muitas complicações que me mostraram que não estou tão familiarizado com essas tecnologias quanto imaginava. Serviu para um bom aprendizado, mas por questões de entrega, decidi optar pelo que era mais rápido.
Também tive problemas com o versionamento do heroku e alguns problemas no cache do puppeteer, o que me atrasou um bom tempo.

## Funcionalidades

O projeto registra os usuários e tem uma funcionalidade de login. Após registrado, o usuário pode então mandar suas queries para o bot, que retorna as informações após uma parcela de tempo.
A aplicação também faz uso de um "cache" muito básico, e não refaz a consulta se uma mesma consulta foi feita a menos de 10 minutos.

# Endpoints

- [POST] /users
  ```json
  {
	  "name": string,
	  "email": string,
	  "password": string"
  }
  ```
  Essa rota é responsável pela criação de um usuário

- [POST] /sessions
  ```json
  {
	  "email": string,
	  "password": string"
  }
  ```
  Essa rota é responsável pela autenticação de um usuário

- [GET] /notebooks
  ```json 
  {
    "filter": [string, [string2],... ]
  }
  ```
  Essa rota é responsável pela coleta de dados. Perceba que o corpo da requisição é `opcional`

## Como rodar em desenvolvimento

  O projeto é simples, como utiliza o postgres, é necessário configurar a variável de ambiente DATABASE_URL de acordo com as configurações do seu banco. (particularmente, sugiro usar um container do docker para tal)
  Exemplo:
  `docker run docker run --name meubanco -e POSTGRES_PASSWORD=123 -e POSTGRES_USER=postgres -p 5432:5432 -d postgres`
  Esse comando cria um container docker chamado `meubanco` com uma imagem do postgres dentro, cujo usuário é `postgres`, a senha é `123` e a base se chama `postgres`.
  ### Obs.:
  Note que essa é apenas uma sugestão de como rodar em desenvolvimento.

  É necessário que você tenha o arquivo .env como sugerido no .env.example, onde o que cada variável significa está explicado.

  Instale as dependências com `npm install` e rode o projeto com `npm run dev`;

## Observações: 
  Existe um arquivo de rotas na raiz do projeto (`rotas.json`) que pode ser importado no insomnia para testar as rotas

## Pendências
  Acredito que faltou uma refatoração no código pra deixar mais manutenível, assim como o uso de testes unitários. Também senti que poderia ter feito no docker, mas infelizmente não deu muito certo, o que pretendo eventualmente aprender mais sobre e não ficar a mercê da sorte.
