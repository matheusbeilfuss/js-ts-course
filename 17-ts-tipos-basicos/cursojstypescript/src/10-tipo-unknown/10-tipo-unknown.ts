let x: unknown;

x = 100;
x = 'Matheus';
x = 900;
x = 10;
const y = 800;

// console.log(x + y); // 'x' is of type 'unknown'.

if (typeof x === 'number') console.log(x + y);

// Module mode
export default 1;
