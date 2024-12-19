/* Recomendado */

// Condicional
const body1 = document.querySelector('body');
// body.style.background = 'red'; // Error: Object is possibly 'null'.
if (body1) body1.style.background = 'red'; // dentro do if, o tipo de body é inferido como HTMLBodyElement, então não há erro.

// Type assertion, recomendado
const body3 = document.querySelector('body') as HTMLBodyElement; // O operador "as" é chamado de "type assertion". Ele diz ao TypeScript que você tem certeza de que body3 é do tipo HTMLBodyElement, então ele não vai gerar um erro de compilação.
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* Não recomendado  */

// Non-null assertion (!): não recomendado
const body2 = document.querySelector('body')!; // O operador ! é chamado de "non-null assertion operator". Ele diz ao TypeScript que você tem certeza de que body2 não é nulo ou indefinido, então ele não vai gerar um erro de compilação.
body2.style.background = 'red';

const body4 = document.querySelector('body') as unknown as number; // O operador "as unknown as" é chamado de "double assertion". Ele diz ao TypeScript que você tem certeza de que body4 é do tipo number, então ele não vai gerar um erro de compilação. No entanto, isso pode levar a erros em tempo de execução se body4 não for realmente um número.
