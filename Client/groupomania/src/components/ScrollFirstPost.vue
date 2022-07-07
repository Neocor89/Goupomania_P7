<template>
  <ScrollComponent>
      <a class="ScrollFirstPost_linkContainer">
        <i class="fa-solid fa-circle-arrow-up ScrollFirstPost_iconScroll"></i>
      </a>
  </ScrollComponent>
</template>

<script>
import ScrollComponent from './ScrollComponent'
export default {
components: {
    ScrollComponent
  }
}
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
 @import "@/assets/scss/components/_ScrollFirstPost.scss";

</style>