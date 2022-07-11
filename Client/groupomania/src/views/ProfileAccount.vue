<template>
  <section>
    <div class="ProfileAccount_page">
       <Navigation />
      <h2 class="ProfileAccount_title">
        Information du compte
      </h2>
      <div class="ProfileAccount_info">
        <br>
        <span class="card-header col-md-4 ProfileAccount_data">{{ userAccount.firstname }}</span>
        <br>
        <span class="card-header col-md-4 ProfileAccount_data"> {{ userAccount.lastname }} </span>
      </div>
      <div>
      </div>
      <div class="ProfileAccount_inscription">
      <p class="card-body ProfileAccount_date-inscription">
        Vous êtes inscrit depuis le :
        <span class="card-body">{{  moment(userAccount.createdAt) }}</span>
      </p>
      </div>
      <div> 
        <button @click="deleteAccount" class="ProfileAccount_delete">
          Supprimez votre compte
        </button>
      </div>
    </div>
  </section>
</template> 

<script>
import Navigation from "../components/Navigation";
import moment  from 'moment/dist/moment'
export default {
  components: {
    Navigation,
  },
  name: "ProfileAccount",
  data() {
    return {
      userAccount: {
        userId: localStorage.getItem("userId"),
        firstname: "",
        lastname: "",
        createdAt: "",
      },
      inputAccount: {
        lastname: "",
        firstname: "",
      },
    };
  },
  mounted() {
    let url = `http://localhost:3000/api/auth/${this.userAccount.userId}`;
    let options = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.userAccount.firstname = data.firstname;
        this.userAccount.lastname = data.lastname;
        this.userAccount.createdAt = data.createdAt;
      })
      .catch((error) => console.log(error));
  },
  methods: {
     moment: function (value) {
       return  moment(value).format("DD.MM.YY à HH:mm");
    }, 
    getOneAccount() {
      let url = `http://localhost:3000/api/auth/${this.userAccount.userId}`;
      let options = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.userAccount.firstname = data.firstname;
          this.userAccount.lastname = data.lastname;
        })
        .catch((error) => console.log(error));
    },
    deleteAccount() {
      let url = `http://localhost:3000/api/auth/${this.userAccount.userId}`;
      let options = {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      fetch(url, options)
        .then((response) => {
          console.log(response);
          localStorage.clear();
          alert("Souhaitez vous supprimer ce compte ?");
        })
        .then(this.$router.push("/signup"))
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
@import "@/assets/scss/views/_ProfileAccount.scss";

</style>