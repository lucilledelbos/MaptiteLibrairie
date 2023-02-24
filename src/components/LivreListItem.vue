<script setup>
const props = defineProps(["livre"]);
const emit = defineEmits(["deleteL"]);
</script>

<template>
  <li>
    {{ livre.pourAfficher() }}

    <button @click="$emit('deleteL', livre.id)" id="bouton">
      <img src="images/supprimer.png" alt="Supprimer" id="img1" />
    </button>
    <button @click="$emit('augmenterL', props.livre)" id="bouton2">
      <img src="images/augmenter.png" alt="Supprimer" id="img2" />
    </button>
    <button @click="$emit('diminuerL', props.livre)" id="bouton3">
      <img src="images/diminuer.png" alt="Supprimer" id="img3" />
    </button>
  </li>
</template>

<style>
#img1 {
  border-style: none;
}
#img2 {
  border-style: none;
}
#img3 {
  border-style: none;
}
#bouton {
  border: none;
  background: rgb(255, 189, 68);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  box-shadow: 0px 3px 8px orangered, inset 0px 2px 3px #fff;
}
#bouton:hover {
  background: orangered;
  text-shadow: none;
  border-radius: 50%;
  width: 35px;
  height: 35px;
}
#bouton:focus {
  border: 3px rgb(255, 94, 233);
}
#bouton2 {
  border: none;

  background: rgb(255, 215, 140);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  box-shadow: 0px 3px 8px rgb(250, 180, 180), inset 0px 2px 3px #fff;
}
#bouton2:hover {
  background: rgb(255, 164, 131);
  border-radius: 50%;
  width: 35px;
  height: 35px;
}
#bouton2:focus {
  border: 3px rgb(255, 164, 131);
}
#bouton3 {
  border: none;
  background: rgb(255, 215, 140);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  box-shadow: 0px 3px 8px rgb(255, 164, 131), inset 0px 2px 3px #fff;
}
#bouton3:hover {
  background: rgb(255, 164, 131);
  border-radius: 50%;
  width: 35px;
  height: 35px;
}
#bouton3:focus {
  border: 3px rgb(255, 164, 131);
}
</style>
