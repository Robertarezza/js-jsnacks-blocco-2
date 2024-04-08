/**
  * Description: aggiugi elemento in nuova array, con gli elementi della prima array
  * @param {elem} params
  * @param {array} params
  * @returns {array}
  */
 function newElem(elem, array) {
    const newArrey = [];

  
    newArrey.push(`${elem}, ${array}`);

    return newArrey;
}


/**
/**
 * Description: stampa un arrai in pagina
 * @param {array} arrayToPrint
 */
function printArray(arrayToPrint) {
    const resuLtEleme = document.getElementById("list");
    
    resuLtEleme.innerHTML += `<p>${arrayToPrint}</p>`;
}