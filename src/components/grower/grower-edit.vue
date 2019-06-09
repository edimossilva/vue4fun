<template>
  <div class="rower-new__container">
    <h1 class="grower-new__title">Editar fazendeiro</h1>
    <my-select
      :growers="growers"
      v-on:selectedItemChange="onSelectedItemChange"
    >
    </my-select>
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
import MySelect from '../shared/select.vue';

export default {
  name: "GrowerEdit",
  components: {
    'grower-form': GrowerForm,
    'my-select': MySelect,
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
    onSelectedItemChange (value) {
      this.selectedId = value
    }
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
