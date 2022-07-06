<template>
  <!-- 
    SIGNUP COMPONENT 
  -->
  <div class="SignUp_page">
    <img src="../assets/images/logo-signup-page.png" alt="Logo groupomania page inscription" class="SignUp_page-logo">
    <h2 class="SignUp_page-title">Gardez le contact entre collèges</h2>
    <h3 class="SignUp_page-slogan">Créez votre compte</h3>
    <form v-on:submit.prevent="signup" id="SignUp_page-form" class="d-flex align-items-center flex-column">
      <div class="form-group">
        <label for="lastname" class="SignUp_page-label"> Nom </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          title="Votre nom"
          class="SignUp_page-field form-control"
          placeholder="Nom"
          required
          max-length = "32"
          pattern="[A-Za-z]{1,32}"
          v-model="inputSignup.lastname"
        />
      </div>
      <div class="form-group">
        <label for="firstname" class="SignUp_page-label">Prénom </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          title="Votre prénom"
          placeholder="Prénom"
          class="SignUp_page-field form-control"
          required
          max-length = "32"
          pattern="[A-Za-z]{1,32}"
          v-model="inputSignup.firstname"
        />
      </div>
      <div class="form-group">
        <label for="email" class="SignUp_page-label">E-mail </label>
        <input
          type="email"
          id="email"
          name="email"
          title="Votre email"
          class="SignUp_page-field form-control"
          placeholder="Email"
          required
          pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}"
          v-model="inputSignup.email"
        />
      </div>
      <div class="form-group">
        <label for="password" class="SignUp_page-label">Mot de passe </label>
        <input
          type="password"
          id="password"
          name="password"
          title="Votre mot de passe"
          class="SignUp_page-field form-control"
          placeholder="Mot de passe"
          required
          pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
          v-model="inputSignup.password"
        />
      </div>
      <p v-show="false" class="SignUp_page-infoPassword">Minimum 8 caractères avec 1 Majuscule, 1 minuscule et un chiffre</p>
      <button type="submit" title="Inscription" class="SignUp_page-submit">Inscription</button>
    </form>

    <nav class="SignUp_page-link">
      <p>
        Vous avez déjà un compte ?
        <router-link to="/">Connectez-vous</router-link>
      </p>
    </nav>
  </div>
</template>


<script>

//TODO
//TODO => REGLER V-SHOW || UTILISER MODAL
//TODO => VERIF REDIRECTION PAGE SIGNUP VERS POSTS
//TODO

export default {
  name: 'SignUp',
  data() {
    return {
      inputSignup: {
        lastname: '',
        firstname: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    signup() {
      let inputDatas = {
        lastname: this.inputSignup.lastname,
        firstname: this.inputSignup.firstname,
        email: this.inputSignup.email,
        password: this.inputSignup.password,
      };
      console.log(inputDatas);
      let url = "http://localhost:3000/api/auth/signup";
      let options = {
        method: "POST",
        body: JSON.stringify(inputDatas),
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log(options);
      fetch(url, options)
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem("userId", res.userId);
          localStorage.setItem("token", res.token);
          console.log(localStorage);
          this.$router.push("/posts");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>


<style lang="scss" scoped>

/* ---------------------
:: Imports utils scss ::
--------------------- */
@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

/* -------------------------
:: Imports scss Component :: 
------------------------- */
@import "@/assets/scss/views/_SignUp.scss";

</style>