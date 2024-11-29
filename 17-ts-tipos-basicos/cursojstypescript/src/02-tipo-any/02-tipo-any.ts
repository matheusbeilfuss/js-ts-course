// Utilize any apenas em último caso
function showMessage(msg: any) {
  // any permite qualquer tipo de dado, mas não é recomendado
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));

// Module mode
export default 1;
