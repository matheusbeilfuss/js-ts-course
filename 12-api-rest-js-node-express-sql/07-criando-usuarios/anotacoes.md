# Criando usuários

- Vamos criar a feature de usuários (login de usuários com middleware para permitir apenas o acesso de usuários logados);
- Criar uma nova tabela de usuários na base de dados;
  - Para criar essa tabela, precisamos fazer uma migration (na pasta do projeto): `npx sequelize migration:create --name=users`;
  - Preencher essa migration e realizar ela: `npx sequelize db:migrate`;
  - Se errar alguma coisa e quiser desfazer, basta executar `npx sequelize db:migrate:undo`;
    - Depois, é só editar a migração (ou migrações) e rodar `npx sequelize db:migrate` novamente.
- Criar o model de usuário;
  - Já validar os campos desse model;
  - Adicionar o campo "password", que não vai existir no BD, vai ser usado apenas para gerar o hash de senha do usuário.
- Instalar o bcrypt: `npm i bcryptjs`;
  - Importar ele em "User.js" e transformar a senha do usuário em um hash.
- Criar o controller do usuário (UserController.js);
- Criar a rota de usuário (userRoutes.js);
- Em cada controller, pode-se ter até cinco métodos:
  - "index" para listar (todos os usuários, por exemplo). Geralmente, GET;
  - "store" ou "create" para criar (um usuário, por exemplo). Geralmente, POST;
  - "delete" para apagar (um usuário, por exemplo). Geralmente, POST;
  - "show" para mostrar (um usuário, por exemplo). Geralmente, GET;
  - "update" para atualizar (um usuário, por exemplo). Geralmente, PATCH (altera somente um valor) ou PUT (substitui um objeto inteiro por outro).
- Se um controller tiver mais métodos do que seu método principal, ele deve estar fazendo mais do que deve, de forma que outro controle deve ser criado;
- Importar as rotas do usuário em "app.js";
- Importar o model de usuário no "index.js" da pasta "database";
- Criar uma requisição "POST Store" no Insomnia para testar o que foi feito;
- Tratar o erro de "unique constraint" do Sequelize;
  - Criar um "try catch" no "UserController.js";
    - Envolver a mensagem de erro em um objeto "errors", para que quem consumir a API saiba que aqueles são os erros sendo retornados;
  - Ir no model de user e adicionar uma mensagem personalizada ("Email já existe") para o erro de e-mail único.
- Mandar os dados pelo Insomnia (usando uma requisição com corpo JSON e modificando o UserController para receber isso);
  - Adicionar "req.body" em User.create(); para isso.
- Nesta aula, cadastramos usuários na nossa aplicação.