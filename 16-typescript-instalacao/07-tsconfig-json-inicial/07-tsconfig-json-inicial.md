# tsconfig.json (inicial)

- Uma forma de compilar o código TS é usando `npx tsc`
- Para iniciar um projeto TS do zero com as configurações padrão, basta rodar `npx tsc --init`
- Isso criará o arquivo `tsconfig.json`
  - "target" especifica a versão do ECMAScript que está no ambiente em que vai rodar o código.
  - "module": "commonjs" é o do Node.
  - "lib": indica ao TS o que vai usar no projeto.
  - "allowJs": para renomear arquivos .js para .ts.
  - "outDir": em qual pasta vai disponibilizar os arquivos de compilação.
    - `src` é a pasta de entrada, com todo o código.
    - Sem essa configuração, o TS é compilado para essa mesma pasta.
  - "strict": restringe muitas coisas do TS.
    - Vai mostrando os erros conforme programa.
  - "esModuleInterop": para exportar funções e trabalhar com modules.
  - "include", além de "compilerOptions", para indicar as pastas de entrada.
- Não mexer nos arquivos em "dist". Se precisar, recompilar o projeto.
