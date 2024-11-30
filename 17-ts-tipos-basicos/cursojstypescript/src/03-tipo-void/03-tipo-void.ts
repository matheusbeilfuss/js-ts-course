function semRetorno(...args: string[]): void {
  // função que não retorna nada, ou seja, retorna void
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Matheus',
  sobrenome: 'B.',

  exibirNome(): void {
    // método que não retorna nada
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Matheus', 'B.');
pessoa.exibirNome();

export { pessoa };
