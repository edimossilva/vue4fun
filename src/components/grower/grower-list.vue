<template>
  <div class="rower-list__container">
    <h1 class="grower-list__title">Listar fazendeiros</h1>
    <my-filter
      :list="growers"
      propertyTitle="Nome"
      propertyName="name"
      v-on:foundItemsChange="onFoundGrowersChange"
    />
    <my-filter
      :list="growers"
      propertyTitle="CPF"
      propertyName="cpf"
      v-on:foundItemsChange="onFoundGrowersChange"
    />
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
        <grower-delete-button :grower="grower"/>
      </tr>
    </table>
  </div>
</template>

<script>
import growerApi from '../../services/grower-api';
import Ordenable from '../shared/ordenable';
import MyFilter from '../shared/my-filter';
import GrowerDeleteButton from './shared/grower-delete-button';

export default {
  name: "GrowerList",
  components: {
    'my-filter': MyFilter,
    'ordenable': Ordenable,
    'grower-delete-button': GrowerDeleteButton,
  },
  data() {
    return {
      searchName: '',
      foundGrowers: [],
    }
  },
  methods: {
    getGrowers() {
      if (this.growers.length == 0) {
        growerApi.getGrowers().then(response => {
          this.storeGrowers(response.data);
          this.foundGrowers = response.data;
        })
      }
    },
    storeGrowers(growers) {
      this.$store.commit('addGrowers', growers);
    },
    onFoundGrowersChange(foundGrowers) {
      this.foundGrowers = foundGrowers;
    },
  },
  computed: {
    growers() {
      return this.$store.getters.growers;
    },
    visibleGrowers() {
      if (this.foundGrowers && this.foundGrowers.length) {
        return this.foundGrowers;
      }
      else {
        this.foundGrowers = this.growers;
        return this.growers;
      }
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
