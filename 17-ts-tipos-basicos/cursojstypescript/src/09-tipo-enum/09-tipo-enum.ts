/*
enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

console.log(Cores.VERMELHO); // 0
console.log(Cores[0]); // VERMELHO

*/

enum Cores {
  VERMELHO = 10, // 10
  AZUL = 100, // 100
  AMARELO = 200, // 200
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA, // 202
}

console.log(Cores); // Une os os enums, mas não é recomendado fazer isso

export function escolhaACor(cor: Cores): void {
  // Garante que o valor passado seja do tipo Cores
  console.log(Cores[cor]);
}

escolhaACor(Cores.VERMELHO); // VERMELHO

// escolhaACor(123456); // Erro de compilação, pois o valor não é do tipo Cores
