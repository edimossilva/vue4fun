<template>
  <div>
    <h1>Editar fazendeiro</h1>
    <my-select :growers="growers" v-on:selectedItemChange="onSelectedItemChange"></my-select>
    <grower-form v-if="selectedGrower" :grower="selectedGrower" :onSaveGrower="editGrower"></grower-form>
  </div>
</template>

<script>
import growerApi from "../../services/grower-api";
import GrowerForm from "./grower-form.vue";
import MySelect from "../shared/select.vue";

export default {
  name: "GrowerEdit",
  components: {
    "grower-form": GrowerForm,
    "my-select": MySelect
  },
  data() {
    return {
      selectedId: ""
    };
  },
  methods: {
    editGrower(grower) {
      growerApi
        .editGrower(grower)
        .then(response => this.storeGrower(response.data))
        .catch(error => {
          if (error.response.status == 404) {
            console.log(
              "não encontramos esse rapaz no servidor, vamos edita-lo localmente"
            );
            this.storeGrower(grower);
          } else {
            console.log(error);
          }
        });
    },
    storeGrower(grower) {
      this.$store.commit("updateGrower", grower);
      alert('Fazendeiro atualizado :)');
    },
    onSelectedItemChange(value) {
      this.selectedId = value;
    }
  },
  computed: {
    growers() {
      return this.$store.getters.growers;
    },
    selectedGrower() {
      return this.growers.find(grower => grower.id == this.selectedId);
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
  margin-top: 20px;
  width: 100%;
  h1 {
    color: #3bb4c1;
    font-weight: normal;
  }
}
</style>
