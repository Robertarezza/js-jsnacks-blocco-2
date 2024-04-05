
//2
/**
 * Description: la funzione deve controllare se due parole hanno la stessa lunghezza
 * @param {stringa} word
 * * @param {stringa} msword
 * @returns {stringa}
 */
function wordLongth(word, msword) {
   
    let result = ";"
    if (word.length > msword.length){
        //console.log(word);
        result = word
    }else if (word.length < msword.length) {
        //console.log(msword);
        result = msword;
    }else {
        //console.log(word, msword);
        result = word + msword;
    }
   return result
}