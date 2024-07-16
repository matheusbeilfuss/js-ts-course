# Configurando e testando o Sequelize

- Sequelize vai fazer o controle da base de dados;
- Na raiz do projeto, instalar o "dotenv";
    - `npm i dotenv`.
- Criar um arquivo ".env" na raiz do projeto;
    - Nele, adicionar:
        - database;
        - database_host;
        - database_port;
        - database_username;
        - database_password.
- Configurar o arquivo ".env" no "app.js";
- Configurar o Sequelize;
    - Criar um arquivo ".sequelizerc";
    - Nele, pressionar "ctrl+shift+p", selecionar "Change Language Mode" e depois "JavaScript";
    - Adicionar nele os lugares dos arquivos de configurações;
    - Criar o arquivo de configuração "database.js" (que vai ser a configuração da base de dados).
- Criar uma base de dados (no DBeaver);
    - Nome: "escola";
    - Charset: "utf8mb4";
    - Collation: "utf8mb4_general_ci".
- Instalar Sequelize e MariaDB;
    - `npm i sequelize mariadb`;
    - `npm i -D sequelize-cli`.
- Criar uma tabela com o Sequelize;
    - `npx sequelize migration:create --name=alunos`;
    - Configurar a tabela no arquivo criado em "src/database/migrations".
- "Migrations" são alterações na base de dados;
- Abrir o terminal na pasta raiz do projeto e executar `npx sequelize db:migrate`;
    - Com isso, deve-se ter as tabelas "alunos" e "SequelizeMeta" no DB (basta atualizar o DBeaver).
- Criar o model de aluno ("Aluno.js" em "models");
- Criar um arquivo "index.js" ou "connection.js" em "database";
- Importar o arquivo de conexão com o banco de dados no "app.js".