# Tipo object (objetos em geral)

- Tudo retorna um objeto em JS.
- Usando `Record<string, unknown>` perde o rastreio do TS para as chaves existentes.
  - `unknown` é um tipo mais seguro que any, pois não permite operações arbitrárias sem verificação de tipo
