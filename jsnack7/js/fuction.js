/**
 * Description: rimuovi ultimo elemento di un array
 * @param {array} params
 * @returns {array}
 */
function removeElemTesta(array) {
    const newArrey = [];
   
    for(let i = 1; i < array.length; i++){
        //console.log(array[i]);
        newArrey.push(array[i]);
    }

    return newArrey;
}