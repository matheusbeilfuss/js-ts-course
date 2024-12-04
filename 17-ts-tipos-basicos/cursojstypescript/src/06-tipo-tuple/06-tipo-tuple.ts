// Tuple
const dadosCliente1: readonly [number, string] = [1, 'Matheus']; // readonly faz com que o array seja somente leitura, não podendo ser alterado
const dadosCliente2: [number, string, string] = [1, 'Matheus', 'B.'];
const dadosCliente3: [number, string, string?] = [1, 'Matheus']; // terceiro elemento é opcional
const dadosCliente4: [number, string, ...string[]] = [1, 'Matheus', 'B.']; // terceiro elemento pode ser um array de strings

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'João';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Matheus', 'B.'];
const array2: ReadonlyArray<string> = ['Matheus', 'B.'];

console.log(array1); // desse modo, não é posível alterar o array, como com push, pop, shift, unshift, splice, etc.
console.log(array2);

// Module mode
export default 1;
