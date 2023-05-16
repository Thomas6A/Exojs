document.addEventListener('DOMContentLoaded', async function () {

    await fetch("https://icanhazdadjoke.com/search", "GET", printJokes)
    await fetch("https://icanhazdadjoke.com/", "GET", printRandomJokes)

    // fetchRandomJoke(request)

    function fetch(url, method, fun) {
        //Initialisation de XHR
        const request = new XMLHttpRequest();
        request.addEventListener("load", fun)
        //Spécifier le type d'appelle [ GET, POST, PUT, PATCH, DELETE ] et l'URL
        request.open(method, url);
        //Spécification que je veux du JSON en type de retour
        request.setRequestHeader('Accept', "application/json")
        //Permet d'envoyer la requêtes
        request.send()
    }

    function printRandomJokes() {
        let result = JSON.parse(this.response);
        document.getElementById('randomJoke').append(result.joke)
    }

    function printJokes() {
        //Je parse/converti mon objet en JSON pour appeler les attributs de l'objet
        let result = JSON.parse(this.response);
        //Je boucle sur le tableau de résultat
        for (let i = 0; i < result.results.length; i++) {
            //Je crée mon <li></li>
            let li = document.createElement('li');
            // Je met la valeut de ma blague dans mob li
            li.innerHTML = result.results[i].joke;
            //Je push/pousser mon li dans mon Ul qui a pour id 'jokes'
            document.getElementById('jokes').append(li);
        }
    }

})