<template>
  <td>
    <button @click="deleteGrower(grower)">
      Apagar
    </button>
</template>

<script>
import growerApi from '../../../services/grower-api';

export default {
  name: "GrowerDeleteButton",
  props: ['grower'],
  methods: {
    deleteGrower(grower) {
      growerApi.deleteGrower(grower)
        .then(
          () => this.deleteGrowerFromStore(grower)
        )
        .catch(error => {
          if (error.response.status == 404) {
            console.log('não encontramos esse rapaz no servidor, vamos apaga-lo localmente');
            this.deleteGrowerFromStore(grower);
          } else {
            console.log(error);
          }
        });
    },
    deleteGrowerFromStore(grower) {
      this.$store.commit('deleteGrower', grower);
    },
  }
}
</script>

<style>

</style>
