<template>
  <div class="rower-new__container">
    <h1 class="grower-new__title">Criar fazendeiro</h1>
    <grower-form
      :grower="grower"
      :onSaveGrower="saveGrower"
      >
    </grower-form>
  </div>
</template>

<script>
import growerApi from '../../services/grower-api'
import GrowerForm from './grower-form.vue';

export default {
  name: "GrowerNew",
  components: {
    'grower-form': GrowerForm,
  },
  data() {
    return {
      grower: {},
    }
  },
  methods: {
    saveGrower(grower) {
      growerApi.createGrower(grower).then(response => this.storeGrower(response.data));
    },
    storeGrower(grower) {
      this.$store.commit('addGrower', grower);
    },
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
