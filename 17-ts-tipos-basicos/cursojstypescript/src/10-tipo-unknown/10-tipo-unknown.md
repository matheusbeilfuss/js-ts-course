# Tipo unknown

- Mesma coisa do any, mas mais seguro.
  - Força fazer a checagem de tipos antes de fazer qualquer operação.
  - Quando precisar receber algo que não sabe o que vai ser com antecedência, utilizar unknown em vez de any sabendo que vai precisar checar o tipo ao usar a variável para alguma operação.
- Na hierarquia de tipos do TS, unknown vem antes do any, sendo o "pai" de todos os outros tipos.
