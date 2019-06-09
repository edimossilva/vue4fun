<template>
  <div class="rower-new__container">
    <h1 class="grower-new__title">Exibir fazendeiro2</h1>
    <my-select
      :growers="growers"
      v-on:selectedItemChange="onSelectedItemChange"
    >
    </my-select>
    <form-item
      v-if="selectedGrower"
      label="Nome"
      :field="selectedGrower.name"
    >
    </form-item>
    <form-item
      v-if="selectedGrower"
      label="CPF"
      :field="selectedGrower.cpf"
    >
    </form-item>
  </div>
</template>

<script>
import growerApi from '../../services/grower-api'
import FormItem from '../shared/form-item.vue';
import MySelect from '../shared/select.vue';

export default {
  name: "GrowerShow",
  components: {
    'form-item': FormItem,
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
