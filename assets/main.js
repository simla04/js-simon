/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
*-creare un array vuoto
*-creare una funzione per generare un numero random
*ciclo per generare 5 numeri casuali nell'array/ bonus: controllare che siano univoci
*-pushiamo ogni numero nell'array vuoto
    stampiamo in pagina i numeri generati(con ciclo for e append se si vuole fare a parte)
*-nascondo con il css i numeri visualizzati con il css dopo tot secondi
*-far comparire 5 prompt dopo tot secondi

    2 idee:
    -idea 1: salvare in un altro array i numeri scritti dall'utente nei prompt e controllare quali e quanti numeri coincidono con l'array del numero random;
    -idea 2: controllare se ogni numero che viene scritto dall'utente è incluso nell'array dei num random
    
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

// -creare un array vuoto
let arrayVuota = [];
let limiteNumeriCasuali = 5;

// -creare una funzione per generare un numero random 
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min +1) ) + min;
}


// => genereiamo 5 numeri casuali
while( arrayVuota.length <= limiteNumeriCasuali ) {

    getRandomInt(1, 100)

}
console.log(arrayVuota)





// // Visualizzare in pagina 5 numeri casuali.
// let numeroRandom = Math.floor(Math.random() * 100) + 1;
// console.log(numeroRandom)
// document.getElementById("titleRandom").innerText =`
// i miei 5 numeri randomici da 1 a 100 sono :  ${numeroRandom}`;

// // Da lì(=questo evento precedente) parte un timer di 30 secondi.
// let tempo = 1 * 1000;

// //e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,


// setTimeout( function(){
//     prompt('ora che i numeri sono scomparsi prova a riscrivere quelli che ti ricordi')
// })