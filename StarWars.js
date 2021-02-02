// ====== liste des films ======================
// -- gestion du click sur le bouton
// cible : le bouton d'id "films"
// event : click
// action : liste des films de StarWars
document.getElementById("films").addEventListener("click", listeFilms);

// ====== la fonction qui récupère les films et les affiche
function listeFilms() {
  // -- url de l'entrée (la route) de l'API qui permet de récupérer les films
  const url = "https://swapi.dev/api/films/";
  // -- option pour faire la req AJAX -> ici req GET
  let fetchOptions = { method: "GET" };
  // -- faire la req AJAX vers le serveur pour récuperer les films
  // -- req HTTP vers le serveur et attente (en asynchrone) de la réponse
  fetch(url, fetchOptions)
    .then((response) => {
      console.log("test");
      // -- réponse au sens du protocole HTTP
      return response.json(); // -- extraire les données au format JSON
    })
    .then((dataJSON) => {
      // dataJSON = les données renvoyées au format JSON
      console.log("test");
      let films = dataJSON.results; // les films sont le tableau "results"
      let resHTML = ""; // variable pour contenir le html généré
      // boucle sur le tableau des films
      for (let f of films) {
        resHTML =
          resHTML + "<li>" + f.title + " (épisode " + f.episode_id + ") </li>";
      }
      // insérer le HTML dans la liste <ul></ul> du fichier index.html
      document.getElementById("liste").innerHTML = resHTML;
    })
    .catch((error) => {
      // gestion des erreurs
      console.log(error);
    });
}

// ====== recherche de personnes ======================
// -- gestion du click sur le bouton
// cible : le bouton d'id "pers"
// event : click
// action : liste des personnes vérifiant le critère de recherche
document.getElementById("pers").addEventListener("click", listePersonnes);

// ======  liste des personnes ==========
function listePersonnes() {
  // - l'url (la route) pour la recherche de personnes n'est pas la même
  const urlPersonnes = "https://swapi.dev/api/people/?search=";
  const fetchOptions = { method: "GET" };
  // récupérer la valeur saisie dans la zone de texte
  let nom = document.getElementById("nom").value;
  console.log(nom);
  // --- la valeur saisie doit être ajoutée à la fin de l'URL
  fetch(urlPersonnes + nom, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      let personnes = dataJSON.results; // les personnes sont le tableau "results"
      let resHTML = "";
      for (let p of personnes) {
        resHTML = resHTML + "<option>" + p.name + "</option>";
      }
      document.getElementById("personnes").innerHTML = resHTML;
    })
    .catch((error) => console.log(error));
}
