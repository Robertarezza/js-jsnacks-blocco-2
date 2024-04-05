
//3
/**
 * Description: genera un array di 10 numeri random
 * @returns {array}
 */
function genArray() {
    let nArray = [];

    for(let i = 0; i < 10; i ++){
        let numerInArray = getRndInteger(1, 100)
        nArray.push(numerInArray);
    }
    return nArray
}


// num random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


  //4
/**
 * Description: stampa un arrai in pagina
 * @param {array} arrayToPrint
 */
function printArray(arrayToPrint) {
    const resuLtEleme = document.getElementById("result");
    
    resuLtEleme.innerHTML += `<li>${arrayToPrint}</li>`;
}