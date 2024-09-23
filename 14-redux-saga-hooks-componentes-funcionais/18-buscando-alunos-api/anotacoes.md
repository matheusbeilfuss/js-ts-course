# Buscando alunos da API

- Vamos começar a fazer a tela de alunos, buscando dados da API;
- Ir na pasta "services", no arquivo "axios.js" e colocar a URL da API;
  - Pode-se usar localhost se quiser rodar a API localmente.
- Com isso, já se pode receber dados da API;
  - Importar o axios no index.js de Alunos para testar se a API está funcionando;
  - Usar o "useEffect" para isso.
- Depois, usar o "useState" para modificar estados do componente funcional e mostrar os dados dos alunos na tela;
- Criar um componente "AlunoContainer" em "styled.js" e usar ele para mostrar os alunos.

- **Importante**: mudar o IP do .env na VM caso ele tenha sido modificado.