let titre = document.querySelector('.titre')
let date = document.querySelector('.date')
let desc = document.querySelector('.desc')
let submit = document.querySelector('.submit')
let liste = document.querySelector('.listeTache')
let statut = document.querySelector('.statut')
let tache
let datestr


submit.addEventListener('click',ajout)
date.addEventListener('input', dateChange)
liste.addEventListener('change', statutChange)


function dateChange(){
    datestr = date.value
}

function ajout(e){
    e.preventDefault()
    let para = document.createElement('p')
    tache =  {titreTache : titre.value, dateTache : datestr, descTache : desc.value, statut : true}
    para.textContent += tache.titreTache+','
    para.textContent += tache.dateTache+','
    para.textContent += tache.descTache
    let check = document.createElement('input')
    check.type = 'checkbox'
    check.classList.add('statut')
    para.appendChild(check)
    liste.appendChild(para)
    titre.value = ''
    date.value = ''
    desc.value = ''
}

function statutChange(){
    if (event.target.classList.contains('statut')) {
        let checkbox = event.target;
        if (checkbox.checked) {
          checkbox.parentElement.style.backgroundColor = 'green';
        } else {
          checkbox.parentElement.style.backgroundColor = 'white';
        }
      }
}