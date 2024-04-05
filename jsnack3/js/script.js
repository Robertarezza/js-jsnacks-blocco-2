//test
//alert("ciao")

//1.

const userArrey = ["Lucia","Paolo","Francesco","Michele"];

console.log(countElem(userArrey));

const print = document.getElementById("tot-array");
print.innerHTML += `<h2> Il numero di elementi presenti nell'array è :</h2> ${countElem(userArrey)}`;