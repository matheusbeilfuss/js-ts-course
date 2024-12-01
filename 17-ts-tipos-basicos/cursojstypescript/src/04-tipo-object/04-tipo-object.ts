const objetoA: {
  readonly chaveA: string; // readonly, não pode ser alterada depois de inicializada
  chaveB: string;
  chaveC?: string; // opcional
  [key: string]: unknown; // index signature, usado para permitir que o objeto tenha propriedades adicionais com chaves do tipo string e valores de qualquer tipo
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

// objetoA.chaveA = 'Outro valor'; // Erro: Cannot assign to 'chaveA' because it is a read-only property
objetoA.chaveB = 'Outro valor';
objetoA.chaveC = 'Novo valor';
objetoA.chaveD = 'Nova chave';
objetoA.chaveD = 123; // A propriedade chaveD pode ser de qualquer tipo, pois o index signature permite valores de qualquer tipo

console.log(objetoA);

// Module mode
export default 1;
