<template>
  <td>
    <button @click="deleteGrower(grower)">
      <font-awesome-icon icon="times-circle" :style="{ color: 'red' }"/>
    </button>
  </td>
</template>

<script>
import growerApi from "../../../services/grower-api";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faTimesCircle);

export default {
  name: "GrowerDeleteButton",
  props: ["grower"],
  methods: {
    deleteGrower(grower) {
      growerApi
        .deleteGrower(grower)
        .then(() => this.deleteGrowerFromStore(grower))
        .catch(error => {
          if (error.response.status == 404) {
            console.log(
              "não encontramos esse rapaz no servidor, vamos apaga-lo localmente"
            );
            this.deleteGrowerFromStore(grower);
          } else {
            console.log(error);
          }
        });
    },
    deleteGrowerFromStore(grower) {
      this.$store.commit("deleteGrower", grower);
      alert('Fazendeiro apagado =z');
    }
  }
};
</script>

<style lang="scss" scoped>
td,
button {
  background: transparent;
  border: none;
}
</style>
