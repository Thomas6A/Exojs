let nbRandom = Math.floor(Math.random() * 100) + 1;

let nbProp = document.querySelector('.nbProp');
let prop = document.querySelector('.proposition');
let plusMoins = document.querySelector('.plusMoins');
let historique = document.querySelector('.historique')

let count = 10;
let envoyer = document.querySelector('.envoyerProp');
let reset = document.querySelector('.resetProp');

envoyer.addEventListener('click',check)
reset.addEventListener('click',resetnb)

function check(){
    let nb = Number(prop.value);
    if (nb === nbRandom) {
        alert('Réussi');
    }else if (nb > nbRandom){
        plusMoins.textContent = 'C est moins';
    }else{
        plusMoins.textContent = 'C est plus';
    }
    count = count-1
    if(count === 0){
        alert('perdu');
    }
    nbProp.textContent = 'Il reste '+count+' propositions';
    historique.textContent += nb+','
    prop.value = '';
}

function resetnb(){
    count = 10;
    nbProp.textContent = 'Il reste '+count+' propositions';
    plusMoins.textContent = '';
    prop.value = '';
    nbRandom = Math.floor(Math.random() * 100) + 1;
    historique.textContent = ''
}