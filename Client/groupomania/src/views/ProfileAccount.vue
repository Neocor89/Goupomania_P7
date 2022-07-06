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
      <ModalSlot v-show="isModalVisible" @close="closeModal" infoGroupomania="Souhaitez vous supprimer votre compte ?" />
      </div>
      <div class="ProfileAccount_inscription">
      <p class="card-body ProfileAccount_date-inscription">
        Vous êtes inscrit depuis le :
        <span class="card-body">{{ userAccount.createdAt | moment("DD.MM.YY") }}</span>
      </p>
      </div>
      <div @click="showModal"> <!-- VERIFIER SI FONCTIONNE -->
        <button @click="deleteAccount" class="ProfileAccount_delete">
          Supprimez votre compte
        </button>
      </div>
    </div>
  </section>
</template> 

<script>
import Navigation from "../components/Navigation";
import ModalSlot from "../components/ModalSlot";
import moment  from 'moment/dist/moment'
export default {
  components: {
    Navigation,
    ModalSlot,
  },
  name: "ProfileAccount",
  data() {
    return {
      isModalVisible: false, //: Lien Modal
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
    showModal() {
      //: Lien Modal
      this.isModalVisible = true;
    },
    closeModal() {
      //: Lien Modal
       this.isModalVisible = false;
    },
     moment: function () {
       return moment();
    }, 
       //! TEST MOMENT SANS RESULTAT
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
          alert(showModal());
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