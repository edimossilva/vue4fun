<template>
  <div class="rower-new__container">
    <h1 class="grower-new__title">Editar fazendeiro</h1>
    <select v-model="selectedId">
      <!-- Objeto literal atribuído para demonstração -->
      <option value="" selected disabled hidden>Escolha um valor</option>
      <option
        v-for = "grower in growers"
        v-bind:key = "grower.id"
        v-bind:value = "grower.id"
      >
        {{ grower.id }}
      </option>
    </select>
    <grower-form
      v-if="selectedGrower"
      :grower="selectedGrower"
      :onSaveGrower="editGrower"
      >
    </grower-form>
  </div>
</template>

<script>
import growerApi from '../../services/grower-api'
import GrowerForm from './grower-form.vue';

export default {
  name: "GrowerEdit",
  components: {
    'grower-form': GrowerForm,
  },
  data() {
    return {
      selectedId: "",
    }
  },
  methods: {
    editGrower(grower) {
      growerApi.editGrower(grower).then(grower => this.storeGrower(grower));
    },
    storeGrower(grower) {
      this.$store.commit('updateGrower', grower);
    },
  },
  computed: {
    growers() {
      return this.$store.getters.growers;
    },
    selectedGrower() {
      return this.growers.find(grower => grower.id == this.selectedId);
    }
  },
}
</script>

<style>
  .rower-new__container {
    margin: 0px;
  }
  .grower-new__title {
    text-align: center;
  }
</style>
