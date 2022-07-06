<template>
  <!-- 
   : COMMENTS COMPONENT  
  -->
  <div class="PostComment_component">

    <div v-for="comment in comments" :key="comment.id" class="PostComment_info-container">

      <div class="PostComment_info-creation">
        <span class="PostComment_data-employee">
          <i class="fas fa-user-circle PostComment_logoUser"> </i> posté par
          {{ comment.firstname }} {{ comment.lastname }} le
          {{ comment.createdAt | moment(" DD.MM.YY à HH:mm") }}
        </span
        >
      </div>
        {{ comment.content }}
       <br />
       
      <a class="PostComment_link">
        <i
          class="fas fa-trash-alt PostComment_delete-option"
           v-if="comment.userId == userId || isAdmin == true"
          @click="deleteComment(comment.id)"
          title="suppression administrateur"
        >
        </i>
      </a>
    </div>
<!-- v-if="comment.userId == userId || isAdmin == true" => enlevé pour css remettre en dessous PostComment_delete-option -->
    <div class="PostComment_area">
    
        <textarea
          type="text"
          title="Ecrivez un commentaire"
          name="content"
          class="form-control PostComment_text"
          v-model="content"
          v-if="comment.userId == userId"
          placeholder="Espace commentaire"
          required
        ></textarea>
        <!--  v-if="comment.userId == userId" ajouté à PostComment_submit + PostComment_text -->
      
      <button class="PostComment_submit" title="Commenter" v-if="comment.userId == userId" @click="createComment()">
        Envoi
      </button>
    </div>
  </div>
</template>

<script >
import moment  from 'moment'
export default {
  name: "PostComments",
  data() {
    return {
      comment: "",
      comments: [],
      firstname: "",
      lastname: "",
      content: "",
      isAdmin: "",
      userId: "",
      messageId: ""
    };
  },
  props: {
    messageId: Number,
    messageUserId: Number,
  }, // 
  mounted() {
    this.userId = JSON.parse(localStorage.getItem("userId"));
    this.isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    console.log(localStorage);
    let url = "http://localhost:3000/api/comments/" + this.messageId + "/display";
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
        this.comments = data;
        console.log(this.comments);
      })
      .catch((error) => console.log(error));
  },
  methods: {
    moment: function () {
      //: Essayé this.$moment
    return moment();
  }, 
    createComment() {
      let inputContent = {
        content: this.content,
        messageId: this.messageId,
      };
      if (!this.content) {
        alert("Commentaire requis");
      } else {
        let url = "http://localhost:3000/api/comments/new";
        let options = {
          method: "POST",
          body: JSON.stringify(inputContent),
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
              this.content = {};
            }
          })
          .then(window.location.reload())
          .catch((error) => console.log(error));
      }
    },
    deleteComment(id) {
      let url = `http://localhost:3000/api/comments/${id}`;
      let options = {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      fetch(url, options)
        .then((response) => {
          console.log(response);
          window.location.reload();
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
@import "@/assets/scss/utils/_variables.scss";
@import "@/assets/scss/utils/_mixins.scss";
@import "@/assets/scss/utils/_breakpoints.scss";

/* -------------------------
:: Imports scss Component :: 
------------------------- */
@import "@/assets/scss/components/_PostComment.scss";

</style>