# Excluindo alunos

- Adicionando a funcionalidade de excluir alunos;
  - Dupla verificação.
- Correção do LOGIN_FAILURE, excluindo a chave "Authorization" adicionada ao logar o usuário dos "defaults" do axios.
  - Isso garante que usuários que façam login e depois logout, não permaneçam com token ativo após o logout.
