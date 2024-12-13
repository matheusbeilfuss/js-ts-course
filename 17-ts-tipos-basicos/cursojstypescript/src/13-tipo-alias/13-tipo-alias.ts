type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul'; // OR
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK; // une os dois tipos

const pessoa: Pessoa = {
  // para ser preciso, em vez de deixar o TS inferir, especificamos o tipo
  idade: 30,
  nome: 'Matheus',
  salario: 200_000, // podemos usar o _ para separar os milhares
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return {
    ...pessoa, // para não perdermos as outras propriedades da pessoa, usamos o spread operator
    corPreferida: cor,
  };
}

console.log(setCorPreferida(pessoa, 'Azul'));
console.log(pessoa);
