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
      <tr v-for="property in properties" v-bind:key="property.id">
        <td> {{property.id}} </td>
        <td> {{property.name}} </td>
        <td> {{property.total_area}} </td>
        <td> {{property.city}} </td>
      </tr>
    </table>
  </div>
</template>

<script>
import propertyApi from '../../services/property-api'
export default {
  name: "PropertyList",
  props: ['growerId'],
  data() {
    return {
      properties: [],
    }
  },
  methods: {
    getProperties(growerId) {
      propertyApi.getProperties(growerId).then(newProperties => this.properties = newProperties);
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
