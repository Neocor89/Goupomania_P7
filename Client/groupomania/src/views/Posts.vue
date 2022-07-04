<template>
  <section class="Posts_component">
    <Navigation></Navigation>
    <div class="Posts_page">
      <h1 class="Posts_title">Créer une publication</h1>
        <div class="form-group Posts_form">
      <form id="form-signup">
        <label for="title" class="Posts_create-title">Titre</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Titre du message"
          class="form-control mb-2 Posts_form-title-field"
          required
          v-model="inputMessage.title"
        />
        <label for="title" class="Posts_create-content ">Message</label>
        <textarea
          type="text"
          title="Quoi de neuf?"
          id="content"
          name="content"
          rows="8"
          class="form-control Posts_form-text-field"
          required
          v-model="inputMessage.content"
          placeholder="Quoi de neuf ?">
        </textarea>
        <label for="image" class="Posts_create-title">Image</label>
        <input type="file" placeholder="upload image" />
      </form>
        </div>
      <button title="Publier" v-on:click="sendMessage">Publier</button>
    </div>
  </section>
</template>

<script>
import Navigation from "../components/Navigation";
export default {
  name: "Message",
  components: {
    Navigation,
  },
  data() {
    return {
      inputMessage: {
        title: "",
        content: "",
        url_image: null,
      },
      userId: "",
    };
  },
  mounted() {
    this.userId = JSON.parse(localStorage.getItem("userId"));
    console.log(this.userId);
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },

    sendMessage() {
      let deliverMessage = {
        title: this.inputMessage.title,
        content: this.inputMessage.content,
        userId: this.userId,
      };
      console.log(deliverMessage);
      let url = "http://localhost:3000/api/posts/new";
      let options = {
        method: "POST",
        body: JSON.stringify(deliverMessage),
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      };
      fetch(url, options)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.ok) {
            window.location.reload();
            this.inputMessage = {}; // Retour à 0 des inputs
          } else {
            alert("Votre Post à bien été reçu ");
          }
        })
        .then(this.$router.push("/list"))
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
@import "@/assets/scss/views/_Posts.scss";

</style>