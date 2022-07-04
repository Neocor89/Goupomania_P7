<template>
  <!-- Website Navigation -->
  <div class="wrapper">
    <header class="navigation_component header_navigation">
      <div class="header_img">
        <img
          src="../assets/images/background-removebg.png"
          alt="Logo page d'acceuil entreprise Groupomania"
          class="logo_navigation"
        />
      </div>
      <nav id="navigation">
        <router-link to="/list" title="Page d'accueil"
          ><i class="fa-solid fa-house-user"></i>
          <p class="Navigation_link">Accueil</p></router-link
        >
        <router-link to="/posts" title="Publication"
          ><i class="fa-solid fa-edit"></i>
          <p class="Navigation_link">Publier</p></router-link
        >
        <router-link to="/account" title="Compte utilisateur"
          ><i class="fa-solid fa-user-tie"></i>
          <p class="Navigation_link">Compte</p></router-link
        >
        <router-link to="/" title="Déconnexion"
          ><i @click="deconnect" class="fa-solid fa-power-off"></i>
          <p class="Navigation_link">Deconnect</p></router-link
        >
      </nav>
    </header>
  </div>
</template>

<script>
//: <img src="https://img.icons8.com/nolan/64/exit.png"/>
export default {
  name: "Navigation",
  methods: {
    deconnect() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>



<style lang="scss" scoped>
/* ----------------------------
:: Imports utils scss folders ::
---------------------------- */
@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

/* -------------------------
:: Imports scss Component :: 
------------------------- */
@import "@/assets/scss/components/_Navigation.scss";
</style>