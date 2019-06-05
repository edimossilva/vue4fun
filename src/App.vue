<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <grower-list></grower-list>
  </div>
</template>

<script>
import GrowerList from './components/grower/grower-list.vue';

export default {
  name: 'app',
  components: {
    'grower-list': GrowerList,
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>
