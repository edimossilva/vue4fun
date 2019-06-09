<template>
  <div class="rower-list__container">
    <h1 class="grower-list__title">Listar fazendeiros</h1>
    <growers-filter
      :growers="growers"
      v-on:foundGrowersChange="onFoundGrowersChange"
    >
    </growers-filter>
    <table class="grower-list__table">
      <tr>
        <th> Id </th>
        <th @click="orderByName"> Nome </th>
        <th> CPF </th>
        <th> Apagar </th>
      </tr>
      <tr v-for="grower in foundGrowers" v-bind:key="grower.id">
        <td> {{grower.id}} </td>
        <td> {{grower.name}} </td>
        <td> {{grower.cpf}} </td>
        <td>
          <button @click="deleteGrower(grower)">
            Apagar
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import growerApi from '../../services/grower-api'
import GrowersFilter from '../shared/growers-filter'
export default {
  name: "GrowerList",
  components: {
    'growers-filter': GrowersFilter,
  },
  data() {
    return {
      searchName: '',
      foundGrowers: [],
    }
  },
  methods: {
    deleteGrower(grower) {
      growerApi.deleteGrower(grower).then(() => this.deleteGrowerFromStore(grower));
    },
    deleteGrowerFromStore(grower) {
      this.$store.commit('deleteGrower', grower);
    },
    getGrowers() {
      if (this.growers.length == 0) {
        growerApi.getGrowers().then(growers => {
          this.storeGrowers(growers);
          this.foundGrowers = growers;
        })
      }
    },
    storeGrowers(growers) {
      this.$store.commit('addGrowers', growers);
    },
    onFoundGrowersChange(growers) {
      this.foundGrowers = growers;
    },
    orderByName() {
      this.foundGrowers.sort(
        (a,b) => (a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
      )
    }
  },
  computed: {
    growers() {
      return this.$store.getters.growers;
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
</style>
