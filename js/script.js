//pulsante invio
var btnSubmit = document.getElementById('submit');


btnSubmit.addEventListener('click', function(){
    //nome passeggero
    var nameX = document.getElementById('name').value;
    document.getElementById('userName').innerHTML = nameX.charAt(0).toUpperCase() + nameX.substring(1).toLowerCase();


    //km da percorrere + prezzo senza sconto
    var kmX = document.getElementById('km').value;
    var prezzo = kmX * 0.21;

    
    //sconti per fascia d'età
    var fascia = document.getElementById('fasciaEta').value;
    if (fascia === 'Minorenne'){
        prezzo = ((kmX * 0.21) / 100) * 80; 
    } else if (fascia === 'Over65'){
        prezzo = ((kmX * 0.21) / 100) * 60;
        Math.round(1);
    }
    prezzo = Math.round(prezzo * 100) / 100;
    document.getElementById('costoTot').innerHTML = ('€ ') + prezzo;
    document.getElementById('offerta').innerHTML = fascia;
    

    // numeri random
    document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 9) +1;
    document.getElementById('codice').innerHTML = Math.floor(Math.random() * (100000 - 90000)) + 90000;;

});



/*pulsante che cancella*/
var btnErase = document.getElementById('annulla');

btnErase.addEventListener('click', function(){
    document.getElementById('name').value = '';
    document.getElementById('km').value = '';
    document.getElementById('fasciaEta').value = '';
    document.getElementById('userName').innerText = '';
    document.getElementById('offerta').innerText = '';
    document.getElementById('carrozza').innerText = '';
    document.getElementById('codice').innerText = '';
    document.getElementById('costoTot').innerText = '';
});


