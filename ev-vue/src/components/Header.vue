<template>
  <div class="header">
    <div class="header__logo">
      <router-link class="logo" to="/">Home</router-link>
    </div>
    <div class="header__navigation">
      <router-link class="navigation__item" to="/stations">Stations</router-link>
      <router-link class="navigation__item" to="/cars">Cars</router-link>
      <router-link class="navigation__item" to="/routes">Routes</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  // props: {
  //   msg: String,
  // },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  display: flex;
  margin: 10px 8%;
  padding: 10px;
  border-style: none none solid none;
  border-width: 2px;
  color: #279664;
  &__logo{
    width: 0%;
  }

&__navigation{
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
  a {
    margin: 0 5%;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #279664;
    }
  }
}
</style>
