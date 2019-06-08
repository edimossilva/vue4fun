<template>
  <div class="rower-list__container">
    <h1 class="grower-list__title">Listar fazendeiros</h1>
    <table class="grower-list__table">
      <tr>
        <th> Id </th>
        <th> Nome </th>
        <th> CPF </th>
      </tr>
      <tr v-for="grower in growers" v-bind:key="grower.id">
        <td> {{grower.id}} </td>
        <td> {{grower.name}} </td>
        <td> {{grower.cpf}} </td>
      </tr>
    </table>
  </div>
</template>

<script>
import growerApi from '../../services/grower-api'
export default {
  name: "GrowerList",
  methods: {
    getGrowers() {
      if (this.growers.length == 0) {
        growerApi.getGrowers().then(growers => this.storeGrowers(growers));
      }
    },
    storeGrowers(growers) {
      this.$store.commit('addGrowers', growers);
    },
  },
  computed: {
    growers() {
      return this.$store.getters.growers;
    }
  },
  mounted: function() {
    this.getGrowers();
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
