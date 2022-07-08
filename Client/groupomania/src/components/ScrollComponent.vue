<template>
  <a @click="scrollTop" v-show="visible" class="bottom-right ScrollComponent_linkChild">
        <slot></slot>
    </a>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 350)
      }, 220)
    },
    scrollListener: function (e) {
      this.visible = window.scrollY > 550
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  }
}
</script>

<style lang="scss" scoped>
body {
  scroll-behavior: smooth;
}
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