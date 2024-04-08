//test
//alert("ciao")


const inputBtn = document.getElementById("add-btn");
let addElem = document.getElementById("new-elem")


inputBtn.addEventListener("click", function (){
const arrayA = ["pippo","pluto","paperino"];

let newElemArray = addElem.value;
//console.log(arrayA);

//const inputE = prompt("dimmi cosa inserire in lista")
//console.log(inputE);

//const arrayB = newElem(inputE, arrayA) ;
//console.log(arrayB);

//arrayA.push(inputE);
//console.log(arrayA);

// arrayA.length
//console.log(arrayB);
const arrayB = newElem(newElemArray, arrayA);
console.log(arrayB);

printArray(arrayB)
console.log(printArray);
}) 
