<template>
  <div>
    <h1>Criar fazendeiro</h1>
    <grower-form :grower="grower" :onSaveGrower="saveGrower"/>
  </div>
</template>

<script>
import growerApi from "../../services/grower-api";
import GrowerForm from "./grower-form.vue";

export default {
  name: "GrowerNew",
  components: {
    "grower-form": GrowerForm
  },
  data() {
    return {
      grower: {}
    };
  },
  methods: {
    saveGrower(grower) {
      growerApi
        .createGrower(grower)
        .then(response => this.storeGrower(response.data));
    },
    storeGrower(grower) {
      alert('Fazendeiro Criado o/');
      this.$store.commit("addGrower", grower);
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;

  h1 {
    color: #3bb4c1;
    font-weight: normal;
  }
}
</style>
