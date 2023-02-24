<script setup>
import { reactive, onMounted } from "vue";
import LivreListItem from "./LivreListItem.vue";
import LivreForm from "./LivreForm.vue";
import Livre from "../Livre.js";
import Search from "./Search.vue";

const listeLivre = reactive([]);

// -- l'url de l'API avec idlibrairie num de liste appel
const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/15/livres";

//augmenter la quantité en stock d'un livre de 1

function handlerAugmenter(livre) {
  console.log(livre.qtestock);

  //ajouter 1 à qte en stock du livre
  livre.augmenterQteStock();
  console.log(livre.qtestock);
  // -- entête http pour la req AJAX
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // -- le livre modifié est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({
      id: livre.id,
      titre: livre.titre,
      prix: livre.prix,
      qtestock: livre.qtestock,
    }),
  };
  // -- la req AJAX
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // actualiser la liste des choses
      getLivre();
    })
    .catch((error) => console.log(error));
}

//modifie en supprimant Livre
function handlerDiminuer(livre) {
  if (livre.qtestock == 1) {
    handlerDelete(livre.id);
  } else {
    console.log(livre.qtestock);

    //ajouter 1 à qte en stock du livre
    livre.diminuerQteStock();
    console.log(livre.qtestock);
    // -- entête http pour la req AJAX
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // -- le livre modifié est envoyé au serveur
    //  via le body de la req AJAX
    const fetchOptions = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify({
        id: livre.id,
        titre: livre.titre,
        prix: livre.prix,
        qtestock: livre.qtestock,
      }),
    };
    // -- la req AJAX
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        // actualiser la liste des choses
        getLivre();
      })
      .catch((error) => console.log(error));
  }
}

// -- handle pour supprimer un livre à partir de l'id du livre
function handlerDelete(id) {
  console.log(id);
  const fetchOptions = {
    method: "DELETE",
  };
  // -- l'id du livre à supprimer doit être
  //  ajouté à la fin de l'url
  fetch(url + "/" + id, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getLivre();
    })
    .catch((error) => console.log(error));
}
// -- handle pour ajouter un nouveau livre à prtir du livre saisi dans le formulaire
function handlerAdd(titre, prix, qtestock) {
  console.log(titre);
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // --  le libelle de la nouvelle chose est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ titre: titre, prix: prix, qtestock: qtestock }),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getLivre();
    })
    .catch((error) => console.log(error));
}
// -- req AJAX pour récupérer les livres
//    et les stocker dans le state listeLivre
function getLivre() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // -- vider la liste des livres
      listeLivre.splice(0, listeLivre.length);
      // pour chaque donnée renvoyée par l'API
      //  créer un objet instance de la classe Livre
      //  et l'ajouter dans la liste listeLivre
      dataJSON.forEach((l) =>
        listeLivre.push(new Livre(l.id, l.titre, l.prix, l.qtestock))
      );
    })
    .catch((error) => console.log(error));
}

//fonction de recherche d'un livre dans la librairie
function handlerSearch(motcle) {
  const fetchOptions = { method: "GET" };
  const url2 =
    "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/15/livres?search=";
  fetch(url2 + motcle, fetchOptions)
    .then((response) => {
      return response.json();
    })

    .then((dataJSON) => {
      console.log(dataJSON);
      let livre = dataJSON;
      let textHTML = "";
      for (let livres of livre) {
        textHTML += "<li>" + livres.titre + "</li>";
      }
      document.getElementById("search").innerHTML = textHTML;
    })
    .catch((error) => console.log(error));
}
//fonction du cycle de vie du composant
// exécutée 1 seule fois à la création
onMounted(() => {
  getLivre();
});
</script>

<template>
  <h3></h3>
  <LivreForm @addL="handlerAdd"></LivreForm>
  <ul>
    <LivreListItem
      v-for="livre of listeLivre"
      :key="livre.id"
      :livre="livre"
      @deleteL="handlerDelete"
      @augmenterL="handlerAugmenter(livre)"
      @diminuerL="handlerDiminuer(livre)"
    />
  </ul>
  <form id="fm">
    <fieldset>
      <legend>Rechercher un livre dans la librairie</legend>
      <Search @search="handlerSearch"> </Search>
    </fieldset>
  </form>
</template>

<style scoped>
legend {
  text-shadow: 1px 1px 0px #ff84f5, 9px 8px 0px rgba(0, 0, 0, 0.15);
  font-family: Brush Script MT;
  font-size: 35px;
  color: black;
  font-weight: medium;
}
</style>
