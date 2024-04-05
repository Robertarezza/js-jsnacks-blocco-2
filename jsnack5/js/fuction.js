/**
 * Description: stampa un arrai in pagina
 * @param {array} arrayToPrint
 */
// function printArray(arrayToPrint) {
//     const resuLtEleme = document.getElementById("result");
    
//     resuLtEleme.innerHTML += arrayToPrint;
// }

function printArray(array) {
    const elemOutput = document.getElementById("output");

    for (let i = 0; i < array.length; i++) {

        let elem = document.createElement("span") ;
        elem.innerHTML += array[i] + ",";
        elemOutput.appendChild(elem);
    }
}