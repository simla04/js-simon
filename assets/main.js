/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.

*/

// Visualizzare in pagina 5 numeri casuali.
let numeroRandom = Math.floor(Math.random() * 100) + 1;
console.log(numeroRandom)
document.getElementById("titleRandom").innerText =`
i miei 5 numeri randomici da 1 a 100 sono :  ${numeroRandom}`;

// Da lì(=questo evento precedente) parte un timer di 30 secondi.
let tempo = 10 * 1000;

//e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,


setTimeout( function(){
    prompt('ora che i numeri sono scomparsi prova a riscrivere quelli che ti ricordi')
})