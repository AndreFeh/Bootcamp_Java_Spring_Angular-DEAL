// GENERICS
// function concatArray(...itens:any[]): any[]{
//     return new Array().concat(...itens);
// }; 
/** CONCAT == CONCATENAR ALGO */
/** OS "..." significam que nao tem limite de quantos elementos dentro do Array pode ter */

/* ^> SE NAO TIVER AS GENERICS DEFINIDAS, ELE PODE INFORMAR UM STRING E NUMBER NA MESMA ARRAY, 
        AFINAL, SE NAO É DEFINIDO TIPO, QUALQUER TIPO SERVE */

    
function concatArray<T>(...itens:T[]): T[]{
    return new Array().concat(...itens);
}; 
        
const numArray = concatArray <number[]> ([20, 15, 233], [30,394,/*"Letras", true*/]);
const numArray2 = concatArray <number[]> (/*["vdovmd"], [false],*/ [83]);
const letrasArray = concatArray <string[]> (["Hello"], ["World"]);

console.log(numArray);
console.log(numArray2);
console.log(letrasArray);