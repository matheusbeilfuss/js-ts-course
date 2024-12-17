type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: 'joao', password: '123456' }; // não explicitou o tipo, mas o TypeScript infere que é um tipo como o do User
const sentUser = { username: 'joao', password: '123456', permissions: '' }; // tudo bem passar um objeto com mais propriedades, desde que as propriedades necessárias estejam presentes
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
