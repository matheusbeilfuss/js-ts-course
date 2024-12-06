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

export function squareOf(x: any): number | null {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoString = squareOf('2');

if (squareOfTwoString === null) {
  console.log('Conta inválida');
} else {
  console.log(squareOfTwoString * 100); // TS entende que squareOfTwoString é do tipo number, pois o if anterior já verificou se é null ou não
}
