<script setup>
import LivreHeader from "./components/LivreHeader.vue";
import LivreList from "./components/LivreList.vue";
</script>

<template>
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Folies d'encre</title>
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
      <h1 style="color: orange">Folies d'encre</h1>
      <a href="https://www.fnac.com/livre.asp">
        <h2 style="color: orange">Idées de livres en ligne</h2>
      </a>
      <img src="images/filleLivre.png" alt="fille et livre" />
    </body>
  </html>
  <LivreHeader />
  <LivreList />
</template>

<style>
body {
  backdrop-filter: blur(2px);
  background-image: url("images/sunset.jpg");
  background-attachment: fixed;
  border: 3px solid orange;
  text-align: center;
  font-size: 20px;
}
h1 {
  background-image: url("images/etoile.jpg");
  font-size: 65px;
  text-align: center;
  font-family: Brush Script MT;
  margin: 100px;
}
h1:hover {
  text-shadow: 4px 3px 0px rgb(255, 218, 218), 9px 8px 0px rgba(0, 0, 0, 0.15);
}

img {
  display: block;
  width: 50%;
  margin: auto;
  border: 1px solid white;
  border-radius: 20px;
}
h2 {
  font-size: 35px;
  font-family: Brush Script MT;
  font-weight: medium;
  text-align: center;
}
a:hover {
  color: white;
}

ul {
  color: black;
  list-style: url("images/puces.png") inside;
  background-color: rgb(255, 202, 158);
  backdrop-filter: blur(10px);
  border: 3px solid orange;
  padding: 40px;
  margin-left: 275px;
  margin-right: 275px;
  border-radius: 50% 20% / 10% 40%;
  font-family: Brush Script MT;
  font-size: 25px;
}
</style>
