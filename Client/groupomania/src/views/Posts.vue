<template>
  <section class="Posts_component">
    <Navigation></Navigation>
    <div class="Posts_page">
      <h1 class="Posts_title">Créer une publication</h1>
        <div class="form-group Posts_form">
      <form id="form-signup" >
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
          <label class="Posts_create-image">Ajouter une image
          <i class="fa-solid fa-image Posts_upload-icon"></i>
            <input type="file" @change="onFileSelected" id="image" placeholder="importer une image"/>
          </label>
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
      },
        file: "",
      url_image: null,
      userId: "",
    };
  },
  mounted() {
    this.userId = JSON.parse(localStorage.getItem("userId"));
    console.log(this.userId);
  },
  methods: {
     onFileSelected(event) {
       this.url_image = event.target.files[0]
       console.log(event.target.files[0]);

    },

    async sendMessage() {
      const formData = new FormData();
      formData.append('title', this.inputMessage.title)
      formData.append('userId', this.userId)
      formData.append('file', this.file)
      formData.append('content', this.inputMessage.content)
      formData.append('images', this.url_image, this.url_image.name)

      let url = "http://localhost:3000/api/posts/new";
      let options = {
        method: "POST",
        body: formData,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      await fetch(url, options)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.ok) {
            window.location.reload();
            this.inputMessage = {};
          } else {
            alert("Post envoyé !");
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