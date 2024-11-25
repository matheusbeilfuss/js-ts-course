/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Matheus'; // Qualquer tipo de strings: '' "" ``
let idade: number = 0b1010; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3]; // "Array" é um tipo genérico. Dentro dos "<>" se define o tipo que o array vai receber
let arrayDeNumeros2: number[] = [1, 2, 3]; // Outra forma de definir um array, mais simples e mais utilizada
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

// Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  // Para cada propriedade do objeto, define-se o tipo que ela vai receber. O "?" indica que a propriedade é opcional
  idade: 30,
  nome: 'Luiz',
};

console.log(pessoa.nome);
// console.log(pessoa.name); // Erro, pois a propriedade "name" não existe no objeto "pessoa"

// Funções
function soma(x: number, y: number): number {
  // O ": number" após os parâmetros indica o tipo de retorno da função. Default é "void", ou seja, não retorna nada. Mas nesse caso, a função retorna um número
  return x + y;
}

const result = soma(4, 5); // Inferência de tipos, o TypeScript infere que o tipo de "result" é "number", pois a função "soma" retorna um número

const soma2: (x: number, y: number) => number = (x, y) => x + y; // ": (x: number, y: number) => number" faz parte da tipagem da função, indicando que ela recebe dois parâmetros do tipo "number" e retorna um "number"

// Module mode
export default 1;
