<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const titre = ref("");

const emit = defineEmits(["addL"]);
</script>

<template>
  <h3 style="color: black">Souhaitez-vous ajouter un livre ?</h3>
  <form @submit.prevent="$emit('addL', titre, prix, qtestock)">
    <input type="text" v-model="titre" placeholder="Titre" id="titre" />
    <input type="text" v-model="prix" placeholder="Prix" id="prix" />
    <input
      type="text"
      v-model="qtestock"
      placeholder="Quantité en stock"
      id="stock"
    />
    <button type="submit" id="valider">
      <img src="images/ajouter.png" id="image" />
    </button>
  </form>
  <h4 style="color: black">Livres disponibles</h4>
</template>

<style scoped>
h3 {
  font-family: Brush Script MT;
  font-size: 37px;
  text-shadow: 1px 0px 0px #f7f432, 9px 8px 0px rgba(0, 0, 0, 0.15);
  background-color: #fffec2;

  padding: 10px;
  margin-left: 400px;
  margin-right: 400px;
  border-radius: 50% 20% / 20% 40%;
}
h4 {
  font-family: Brush Script MT;
  text-decoration: underline wavy black;
  font-size: 45px;
  font-weight: medium;
  text-align: center;
  text-shadow: 1px 1px 0px orange, 9px 8px 0px rgba(0, 0, 0, 0.15);
}

#titre {
  font-family: Brush Script MT;

  border-radius: 60px;
  background: #f7f432;
  text-align: center;
  font-size: 25px;
}
#prix {
  font-family: Brush Script MT;

  border-radius: 60px;
  background: #f7f432;
  text-align: center;
  font-size: 25px;
}
#stock {
  font-family: Brush Script MT;

  border-radius: 60px;
  background: #f7f432;
  text-align: center;
  font-size: 25px;
}
#valider {
  background: #f7f432;
  border: 1px solid #eee;
  border-radius: 60px;
  font-size: 17px;
  border-style: none;
  border-radius: 60px;
  width: 35px;
  height: 35px;
}
#valider:hover {
  background: #fffeba;
  border: 1px solid #eee;
  border-radius: 20px;
  text-shadow: none;
}
</style>
