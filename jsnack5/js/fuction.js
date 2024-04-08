// /**
//  * Description: stampa un arrai in pagina
//  * @param {array} arrayToPrint
//  */
// function printArray(arrayToPrint) {
//     const resuLtEleme = document.getElementById("result");
    
//     resuLtEleme.innerHTML += arrayToPrint;
// }

// function printArray(array) {
//     const elemOutput = document.getElementById("output");

//     for (let i = 0; i < array.length; i++) {

//         let elem = document.createElement("span") ;
//         elem.innerHTML += array[i] + ",";
//         elemOutput.appendChild(elem);
//     }
// }


/**
 * Description: crea una stringa d elementi di array divisi da virgo
 * @param {array} arrayToPrint
 * @param {string} divider
 * @returns {stringa}
 */                     // separatore-se non da nulla metto ,"paramentri opzionale da mettere alla fine"
function stampa(arrayToPrint, divider =",") {
    let resultSting ="";

for(let i = 0 ; i < arrayToPrint.length; i ++){
    const currElem = arrayToPrint[i];
    resultSting += currElem;
    if(i !== arrayToPrint.length - 1) {
        resultSting += `${divider}`;
    }

}
return resultSting
}