<template>
  <div>
    <h1>Exibir fazendeiro</h1>
    <my-select :growers="growers" v-on:selectedItemChange="onSelectedItemChange"></my-select>
    <form-item v-if="selectedGrower" label="Nome" :field="selectedGrower.name"></form-item>
    <form-item v-if="selectedGrower" label="CPF" :field="selectedGrower.cpf"></form-item>
    <property-list v-if="selectedGrower" :grower-id="selectedId"></property-list>
  </div>
</template>

<script>
import growerApi from "../../services/grower-api";
import FormItem from "../shared/form-item.vue";
import MySelect from "../shared/select.vue";
import PropertyList from "../property/property-list.vue";

export default {
  name: "GrowerShow",
  components: {
    "form-item": FormItem,
    "my-select": MySelect,
    "property-list": PropertyList
  },
  data() {
    return {
      selectedId: ""
    };
  },
  methods: {
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  h1 {
    font-weight: normal;
    color: #3bb4c1;
  }
}
</style>
