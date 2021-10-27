<template>
  <div class="home">
    <Header msg="Hello World"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../components/Header.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Header,
  },
});
</script>
