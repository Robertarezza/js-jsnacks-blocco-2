/**
 * Description: la funzione deve trovare l'indice degli elementi in un array
 * @param {array} params
 * @param {elem} params
 * @returns {number} //posizione dell'elemento oppure -1
 */
function indexElem(array, elem) {
    
   
    for(let i = 0; i < array.length; i++){
        
        if(array[i] === elem){
              //console.log(array[i] );
             return i;
        }
            
    }
    
    return -1
  
}


