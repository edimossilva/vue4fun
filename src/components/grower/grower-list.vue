<template>
  <div class="rower-list__container">
    <h1 class="grower-list__title">Growers List</h1>
    <table class="grower-list__table">
      <tr>
        <th> Nome </th>
        <th> CPF </th>
      </tr>
      <tr v-for="grower in growers" v-bind:key="grower.id">
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
  data() {
    return {
      growers: []
    }
  },
  methods: {
    getGrowers() {
      growerApi.getGrowers().then(result => this.getGrowersFromJson(result));
    },
    getGrowersFromJson(json) {
      this.growers = json.data;
    },
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

  h1 {
    margin-bottom: 24px;
    margin-top: 24px;
  }
</style>
