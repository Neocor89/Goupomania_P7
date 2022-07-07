<template>
  <div class="ModalSlot_backdrop">
    <div class="ModalSlot_container">
      <header class="ModalSlot_header">
      <slot name=header>
        {{ infoGroupomania }}
      </slot>
      </header>
      <section class="ModalSlot_body">
      <slot name=body>
        Merci de confirmer votre choix
      </slot>
      </section>
      <footer class="ModalSlot_footer">
      <div class="ModalSlot_btn-choice">
      <button type="button" class="ModalSlot_btn-valid" @click="">Confirmer</button>
      <button type="button" class="ModalSlot_btn-close" @click="">Annuler</button>
      </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalSlot",
  props: {
    infoGroupomania: String
  },
  methods: {
    close() {
      this.$emit('close');
    }
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

.ModalSlot_backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(54, 54, 53, 0.7);
}

.ModalSlot_container {
  width: 350px;
  height: 240px;
  border-radius: 15px;
  background: #ffffff;
  box-shadow: inset 2px 2px 34px 2px rgb(167, 165, 164);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

:where(.ModalSlot_header, .ModalSlot_footer) {
  padding: 15px;
  display: flex;
}

.ModalSlot_header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: $col-prim;
  justify-content: center;
    font-size: $fSize-classic;
  @include phone-screen  {
    font-weight: $w700;
    font-family: $font-primary;
    font-size: $fSize-medium;
  }
}

.ModalSlot_body {
  position: relative;
  padding: 20px 10px;
  font-weight: $w500;
    font-family: $font-primary;
    font-size: $fSize-medium;

}



.ModalSlot_footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  font-weight: $w500;
    font-family: $font-primary;
    font-size: $fSize-medium;
}

.ModalSlot_btn-valid {
  margin-top: 12px;
  @include modal-btn-responsive;
}

.ModalSlot_btn-close {
  position: absolute;
  top: 3px;
  right: 3px;
  border: none;
  font-size: 1rem;
  padding: 10px;
  cursor: pointer;
  font-weight: $w700;
  color: $light;
  background: $col-danger;
  border-radius: 6px
  // border: 1px solid $col-prim;
}

.ModalSlot_btn-valid {
  color: $light;
  background: $col-prim;
  background: #4aae9b;
  border-radius: 8px;
}



</style>