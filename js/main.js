// Prove ES6

// dichiarazione variabili
// POSSONO VARIARE:
var a = 2;
var a = 3;
console.log(a);//3
//
let b = 3;
b = 3+1; // MA senza dichiararla di nuovo
console.log(b);//4


// NON PUO' VARIARE:
const c = 10;
const c = 11; //ERROR
c = 11 ; //ERROR


// block scope

var i = 0;
if (true) {
var i = 1;
}
console.log(i); // 1

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



// ARROW FUNCTION
function somma( a, b ){
    return a + b;
}

let somma = ( a , b ) => a + b;
console.log(somma(3,2));
// return implicito se è solo una riga

const numeroCasuale = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;



document.getElementById("qualcosa").addEventListener("click",
function(){
  //
});

document.getElementById("qualcosa").addEventListener("click",
()=> )// parentesi graffe solo se il codice è su piu righe


// spread e nome parametro = rest
function myFunction(...myArguments){
  console.log(myArguments[2].nome);
}
myFunction("Ciao", ["blu", "red"], { nome: "Nicole"});
// gli argomenti sono trasformati in array


function sommaSpread(...numeri) {
  let somma=0;
  for (let i=0;i<numeri.length;i++){
  somma+=numeri[i];
  }
  return somma;
};
let somma1=sommaSpread(35,48,33,24,3,4,45,364,34,33,42,42,31);
console.log(somma1);
let somma2=sommaSpread(1,2,4,43,3,2);
console.log(somma2);
//


// spread per mergiare array
const arr1 = [12, 13, 14];
const arr2 = [56, 90, 2];

let mergedArray = [...arr1, 68,55,3,...arr2];
console.log(mergedArray);
