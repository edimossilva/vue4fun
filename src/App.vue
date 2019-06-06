<template>
  <div id="app" class="app__container">
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
}
</script>

<style>
.app__container {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 16px;
}
</style>
