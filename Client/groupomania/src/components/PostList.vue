<template>
  <div class="Postlist__page">
    <!-- 
      POSTS COMPONENT 
      -->
    <div v-for="message in messages" :key="message.id" class="Postlist__component card col col-md-8">
      <div class="Postlist__container card-header">
        <img src="../assets/images/avatar-placeholder.png" alt="avatar utilisateur" class="Postlist__avatarEmployee">
        <div>
        <span class="employe_info card-title"
          >{{ message.user.firstname }} {{ message.user.lastname }} </span>
          <div class="Postlist__postCreated">
          {{ moment(message.createdAt) }}
          </div>
        </div>
      </div>
      <div class="card-text card-body">
        <p class="Postlist__title" title="title post">{{ message.title }}</p>
      </div>
      <div class="card-text card-body">
        <p class="Postlist__content">{{ message.content }}</p>
      </div>
      <div class="card-text card-body">
        <img v-show="message.url_image" class="PostList_image" :src="message.url_image"/>
      </div>

      <a class="Postlist__delete_post">
        <i
          class="fas fa-trash-alt"
          v-if="message.userId == userId || isAdmin == true"
          @click="deleteMessage(message.id)"
          title="supprimer"
        >
          
        </i>
      </a>
      <PostComment :messageId="message.id" :messageUserId="message.userId"/>
    </div>
  </div>
</template> 

<script>
import PostComment from './PostComment.vue'
import moment  from 'moment'

export default {
  name: "PostList",
  components: {
    PostComment
  },
  data() {
    return {
       message: "",
      firstname: "",
      lastname: "",
      userId: "",
      isAdmin: "",
      messages: [],
    };
  },
  mounted() {
    this.userId = JSON.parse(localStorage.getItem("userId"));
    this.isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    console.log(localStorage);
    let url = "http://localhost:3000/api/posts";
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
        this.messages = data;
        console.log(this.message);
      })
      .catch((error) => console.log(error));
  },
  methods: {
    moment: function (value) {
    return  moment(value).format("DD.MM.YY à HH:mm");
  }, 
    deleteMessage(messageid) {
      let url = `http://localhost:3000/api/posts/${messageid}`;
      let options = {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      fetch(url, options)
        .then((response) => {
          console.log(response);
          alert("Votre Post à bien été supprimé !")
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
 @import "@/assets/scss/components/_PostList.scss";

</style>