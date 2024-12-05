let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson( // quando há parâmetros opcionais, é necessário verificar se o parâmetro foi passado ou não, para evitar erros de execução
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}
