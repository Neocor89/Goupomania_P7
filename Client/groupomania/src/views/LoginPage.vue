 <template>
  <div class="login_component">
    <img src="../assets/images/icon-left-font-removebg.png" alt="">
    <h1 class="slogan_position">Restons connectés</h1>
    <div class="form_login">
    <form v-on:submit.prevent="login" id="form-login" class="d-flex align-items-center flex-column">
      <div class="form-group">
        <label for="email" class="mb-2 login_label">E-mail</label>
        <input
          type="email"
          id="email"
          title="Email"
          name="email"
          class="form-control mb-2 login_input"
          placeholder="Email"
          required
          v-model="inputLogin.email"
        />
      </div>
      <div class="form-group">
        <label for="password" class="mb-2 login_label">Mot de passe</label>
        <input
          type="password"
          id="password"
          title="Mot de passe"
          name="password"
          class="form-control login_input"
          placeholder="Mot de passe"
          required
          v-model="inputLogin.password"
        />
      </div>
      <button type="submit" title="Connexion" class="btn_connect">Connexion</button>
    </form>
      </div>
    <nav>
      <p class="login_link">
         Créer votre compte
        <router-link to="/signup">Rejoignez-nous !</router-link>
      </p>
    </nav>
  </div>
</template> 


<script>
/*
Cor 
Beni 
beni@email.com 
BeniCor89
*/
export default {
  name: "Login",
  data() {
    return {
      inputLogin: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      let loginDatas = {
        email: this.inputLogin.email,
        password: this.inputLogin.password,
      };
      console.log(loginDatas);
      //: Importantion de l'URL utilisé par le backend
      let url = "http://localhost:3000/api/auth/login";
      //: Utilisation de la methode POST pour se loger
      let options = {
        method: "POST",
        body: JSON.stringify(loginDatas),
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch(url, options)
        .then((res) => res.json())
        .then((res) => {
          if (res.userId && res.token) {
            localStorage.setItem("userId", res.userId);
            localStorage.setItem("token", res.token);
            localStorage.setItem("isAdmin", res.isAdmin);
            console.log(localStorage);
            this.$router.push("list");
          } else {
            alert(" Le mot de passe indiqué est incorrect ! ");
          }
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>


<style lang="scss" scoped>

/* ----------------------------
:: Imports utils scss folders ::
---------------------------- */
@import "../assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

/* -------------------------
:: Imports scss Component :: 
------------------------- */
@import "@/assets/scss/views/_LoginPage.scss";

</style>