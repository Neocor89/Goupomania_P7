<template>
  <!-- 
   : COMMENTS COMPONENT  
  -->
    <ScrollFirstPost />
  <div class="PostComment_component">
    <div v-for="comment in comments" :key="comment.id" class="PostComment_info-container">

      <div class="PostComment_info-creation">
        <span>
          <div class="PostComment_info-currentUser">
            <i class="fas fa-user-circle PostComment_info-logoUser" > </i> posté par
            {{ comment.firstname }} {{ comment.lastname }} le
            {{ comment.createdAt | moment(" DD.MM.YY à HH:mm") }}
          </div>
        </span>
        {{ comment.content }}
      </div>
       <br />
       
      <a class="PostComment_link">
        <i
          class="fas fa-trash-alt PostComment_delete-option"
           v-if="comment.id == userId || isAdmin == true"
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
          placeholder="Espace commentaire"
          required
        ></textarea>
        <!--  v-if="comment.userId == userId" ajouté à PostComment_submit + PostComment_text -->
      
      <button class="PostComment_submit" title="Commenter"  @click="createComment(comment.id)">
        Envoi
      </button>
    </div>
  </div>
</template>

<script >
import moment  from 'moment'
import ScrollFirstPost from "../components/ScrollFirstPost.vue"; 
export default {
  name: "PostComments",
  components: { ScrollFirstPost },
    props: {
      messageId: Number,
      messageUserId: Number,
    },
  data() {
    return {
      comment: "",
      firstname: "",
      lastname: "",
      content: "",
      isAdmin: "",
      userId: "",
      comments: [],
    };
  },
  mounted(messageId) {
    this.userId = JSON.parse(localStorage.getItem("userId"));
    this.isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    let url = 'http://localhost:3000/api/comments/' + this.messageId + '/display';
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
        console.log("Console.log de : " + this.userId);
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
         console.log("LOG message id is : " + inputContent);
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