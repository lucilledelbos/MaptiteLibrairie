<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const titre = ref("");

const emit = defineEmits(["search"]);
</script>

<template>
  <form @submit.prevent="$emit('search', motcle)">
    <input
      type="text"
      v-model="motcle"
      placeholder="Rechercher"
      id="barreSearch"
    />

    <button type="submit" id="rechercher">
      <img src="images/search.png" id="image" />
    </button>
  </form>
  <p id="search"></p>
</template>

<style scoped>
#rechercher {
  background: #fd71f1;
  border: none;
  border-radius: 60px;
  width: 35px;
  height: 35px;
}
#rechercher:hover {
  background: #ffb8f9;
  border: 1px solid #eee;
  border-radius: 20px;
  text-shadow: none;
}
p {
  font-family: Brush Script MT;
  font-size: 25px;
  color: black;
  font-weight: normal;
  text-align: center;
  list-style: square url("images/puces.png") inside;
}
#barreSearch {
  font-family: Brush Script MT;

  border-radius: 60px;
  background: #ffb1f8;
  text-align: center;
  font-size: 25px;
}
#image {
  border-style: none;
}
</style>