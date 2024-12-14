type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD; // Intersecao tem o tipo 'A' apenas, pois é o único que está presente em todos os tipos

const pessoa: Pessoa = {
  nome: 'Matheus',
  sobrenome: 'B.',
  idade: 30,
};

console.log(pessoa);

// Module mode
export { pessoa };
