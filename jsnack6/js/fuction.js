/**
 * Description: rimuovi ultimo elemento di un array
 * @param {array} params
 * @returns {array}
 */
function removElemCoda(array) {
    const newArrey = [];
   
    for(let i = 0; i < array.length - 1; i++){
        //console.log(array[i]);
        newArrey.push(array[i]);
    }

    return newArrey;
}


