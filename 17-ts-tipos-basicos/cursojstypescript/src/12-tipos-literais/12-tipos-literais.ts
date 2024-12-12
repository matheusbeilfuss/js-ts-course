let x = 10; // infere o tipo como number
x = 0b1010;
// x = 'Matheus'; // não posso atribuir uma string a uma variável que foi inferida como number
const y = 10; // tipo literal, porque o valor não pode ser alterado, então o tipo é o próprio valor (é um subtipo de number)

/*
let a: 100 = 100; // tipo literal, porque o valor não pode ser alterado, então o tipo é o próprio valor (é um subtipo de number)
a = 120; // erro, porque o tipo da variável é 100, então não posso atribuir outro valor que não seja 100

não é recomendado usar let para tipos literais, porque o valor da variável pode ser alterado, então o tipo da variável não é mais o mesmo. Por isso, é melhor usar const para tipos literais
*/
const a = 100; // eslint-disable-line

const pessoa = {
  nome: 'Matheus' as const,
  sobrenome: 'B.',
};

// pessoa.nome = 'João'; // erro, porque o tipo da propriedade nome é 'Matheus', então não posso atribuir outro valor que não seja 'Matheus'

export function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  // só aceita os valores 'Vermelho', 'Amarelo' ou 'Azul'
  return cor;
}
console.log(escolhaCor('Vermelho'), pessoa, x, y);
