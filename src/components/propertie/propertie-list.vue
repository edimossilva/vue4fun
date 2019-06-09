<template>
  <div class="rower-list__container">
    <h1 class="grower-list__title">Listar Propriedades</h1>
    <table class="grower-list__table">
      <tr>
        <th> Id </th>
        <th> Nome </th>
        <th> Área </th>
        <th> Cidade </th>
      </tr>
      <tr v-for="propertie in properties" v-bind:key="propertie.id">
        <td> {{propertie.id}} </td>
        <td> {{propertie.name}} </td>
        <td> {{propertie.total_area}} </td>
        <td> {{propertie.city}} </td>
      </tr>
    </table>
  </div>
</template>

<script>
import propertieApi from '../../services/propertie-api'
export default {
  name: "PropertieList",
  props: ['growerId'],
  data() {
    return {
      properties: [],
    }
  },
  methods: {
    getProperties(growerId) {
      propertieApi.getProperties(growerId).then(newProperties => this.properties = newProperties);
    },
  },
  mounted: function() {
    this.getProperties(this.growerId);
  },
  watch: {
    growerId: function () {
      this.getProperties(this.growerId);
    },
  }
}
</script>

<style>
  .rower-list__container {
    margin: 0px;
  }
  .grower-list__title {
    text-align: center;
  }
  .grower-list__table {
    list-style-type: none;
  }
</style>
