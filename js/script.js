listaNomi = [
  "Nicole",
  "Diego",
  "Giovanna",
  "Ludovica",
  "Manuel",
  "Loris",
  "Roberto"
];

var numMin = 1;
var numMax = 5;
document.write(listaNomi+"<br>");
//Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

function trovaNum(array,min,max){
  var arrayNomi=[];
  for (var i=min; i<=max;i++)
  arrayNomi.push(array[i]);
  return arrayNomi;
}

var arrayNomi=trovaNum(listaNomi,numMin,numMax);
document.write("Nuovo array: "+arrayNomi);
