// Prove ES6

// dichiarazione variabili
// POSSONO VARIARE:
var a = 2;
var a = 3;
// console.log(a);//3
//
let b = 3;
b = 3+1; // MA senza dichiararla di nuovo
// console.log(b);//4


// NON PUO' VARIARE:
const c = 10;
const c = 11; //ERROR
c = 11 ; //ERROR


// block scope

var i = 0;
if (true) {
var i = 1;
}
// console.log(i); // 1

// con LET l'assegnamento è locale
let i = 0;
if (true) {
let i = 1;
console.log(i); // 1
}
console.log(i); // 0
// {let i = 1} i non è accessibile


var x = 10;
{var x = 2;}
console.log(x);// 2

var x = 10;
{let x = 5;}
console.log(x);// 10


// scope nei cicli
var i = 5;
for (var i = 0; i < 10; i++) {}
// 10


let i = 5;
for (let i = 0; i < 10; i++) {}
// 5



// concatenazione tramite Alt+\
let stringa = 'Hello';
console.log(
`${stringa} World`
);
document.write(`${stringa} world`);



// funzioni
function somma( a, b ){
    return a + b;
}

let somma = ( a , b ) => a + b;
console.log(somma(3,2));


const numeroCasuale = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
