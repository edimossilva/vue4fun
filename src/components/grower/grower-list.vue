<template>
  <div class="rower-list__container">
    <h1 class="grower-list__title">Listar fazendeiros</h1>
    <label>Nome</label>
    <input
      type="search"
      v-model="searchName"
    />
    <table class="grower-list__table">
      <tr>
        <th> Id </th>
        <th> Nome </th>
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
export default {
  name: "GrowerList",
  data() {
    return {
      searchName:'',
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
        growerApi.getGrowers().then(growers => this.storeGrowers(growers));
      }
    },
    storeGrowers(growers) {
      this.$store.commit('addGrowers', growers);
    },
    serchByName(grower) {
      const groweName = grower.name.toLowerCase();
      const searchName = this.searchName.toLowerCase();
      return groweName.includes(searchName);
    }
  },
  computed: {
    growers() {
      return this.$store.getters.growers;
    },
    foundGrowers() {
      if (this.searchName) {
        const foundGrowers = [...this.growers];
        return foundGrowers.filter(this.serchByName);
      } else {
        return this.growers;
      }
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
