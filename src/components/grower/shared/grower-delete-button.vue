<template>
<td>
  <button @click="deleteGrower(grower)">
    Apagar
  </button>
</td>
</template>

<script>
import growerApi from '../../../services/grower-api';

export default {
  name: "GrowerDeleteButton",
  props: ['grower'],
  methods: {
    deleteGrower(grower) {
      growerApi.deleteGrower(grower).then(() => this.deleteGrowerFromStore(grower));
    },
    deleteGrowerFromStore(grower) {
      this.$store.commit('deleteGrower', grower);
    },
  }
}
</script>

<style>

</style>
