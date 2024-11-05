# useParams e useSearchParams: Usando parâmetros de URL e Query String

- Parâmetros podem ser dinâmicos ou não;
- Pode-se especificar melhor uma rota passando parâmetros nela. O React Router Dom consegue mapear isso;
- Quando for preciso carregar algo de uma API, fazer um fecth de dados externos, geralmente é isso que se vai utilizar;
- Também se pode as query strings das URLs, como em uma paginação por exemplo: `http://localhost:5173/posts?page=100`.
  - Exemplo com Search Params e Query String: `http://localhost:5173/posts/10?page=102`;
  - Outro exemplo: `http://localhost:5173/posts/10?page=102&segundachave=segundovalor`.
