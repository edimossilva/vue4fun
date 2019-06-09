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
        <ordenable :list="foundGrowers" propertyTitle="Id" propertyName="id"></ordenable>
        <ordenable :list="foundGrowers" propertyTitle="Nome" propertyName="name"></ordenable>
        <ordenable :list="foundGrowers" propertyTitle="CPF" propertyName="cpf"></ordenable>
        <th> Apagar </th>
      </tr>
      <tr v-for="grower in visibleGrowers" v-bind:key="grower.id">
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
import Ordenable from '../shared/ordenable'

export default {
  name: "GrowerList",
  components: {
    'growers-filter': GrowersFilter,
    'ordenable': Ordenable,
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
    onFoundGrowersChange(foundGrowers) {
      this.foundGrowers = foundGrowers;
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
    visibleGrowers() {
      if (this.foundGrowers.length) {
        return this.foundGrowers;
      }
      return this.growers;
    }
  },
  mounted: function() {
    this.getGrowers();
  },
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
