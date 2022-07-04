<template>
  <div>
    <Navigation></Navigation>
    <PostList />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
import PostList from "../components/PostList";
export default {
  name: "List",
  components: {
    Navigation,
    PostList,
  },
};
</script>