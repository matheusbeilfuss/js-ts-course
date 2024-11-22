# Instalando e configurando o Prettier

- `npm i prettier eslint-config-prettier eslint-plugin-prettier -D`
- O `eslint-plugin-prettier` foi removido com `npm uninstall eslint-plugin-prettier`, pois o Prettier foi mantido apenas para formatação do código, enquanto o ESLint ficou responsável pela qualidade/análise do código.
  - Assim, evita-se que duas ferramentas tentem controlar a mesma formatação.
