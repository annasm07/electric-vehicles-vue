<template>
  <div class="app__header">
     <Header/>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Header,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
