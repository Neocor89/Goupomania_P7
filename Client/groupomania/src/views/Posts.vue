<template>
  <section class="Posts_component">
    <Navigation></Navigation>
    <div class="Posts_page">
      <h1 class="Posts_title">Créer une publication</h1>
        <div class="form-group Posts_form">
      <form id="form-signup" enctype="multipart/form-data">
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
        <div class="Posts_upload-image">
          <label for="image" class="Posts_create-image">Ajouter une image
          <i class="fa-solid fa-image Posts_upload-icon"></i>
            <input type="file" @change="onFileSelected" id="image"  accept="image/*" placeholder="importer une image"/>
          </label>
            <!-- <input v-model="inputMessage.url_image"/> -->
        </div>
      </form>
        </div>
      <button title="Publier" @click="sendMessage" class="Posts_publish-image">Publier</button>
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
        url_image: "",
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
      // if(event.target.files.length) return;
      this.selectedFile = event.target.files[0]
    },

    sendMessage() {
      let contentMessage = {
      file: this.selectedFile,
      userId: this.userId,
      title: this.inputMessage.title,
      content: this.inputMessage.content
    }
      console.log(contentMessage);
      let url = "http://localhost:3000/api/posts/new";
      let options = {
        method: "POST",
        body: JSON.stringify(contentMessage),
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
            this.inputMessage = {};
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