<template>
  <div>
    <h1>Listar fazendeiros</h1>
    <div class="filter">
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
    </div>
    <table>
      <thead>
        <tr>
          <ordenable :list="foundGrowers" propertyTitle="Id" propertyName="id"></ordenable>
          <ordenable :list="foundGrowers" propertyTitle="Nome" propertyName="name"></ordenable>
          <ordenable :list="foundGrowers" propertyTitle="CPF" propertyName="cpf"></ordenable>
          <th>Apagar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="grower in visibleGrowers" v-bind:key="grower.id">
          <td>{{grower.id}}</td>
          <td>{{grower.name}}</td>
          <td>{{grower.cpf}}</td>
          <grower-delete-button :grower="grower"/>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import growerApi from "../../services/grower-api";
import Ordenable from "../shared/ordenable";
import MyFilter from "../shared/my-filter";
import GrowerDeleteButton from "./shared/grower-delete-button";

export default {
  name: "GrowerList",
  components: {
    "my-filter": MyFilter,
    ordenable: Ordenable,
    "grower-delete-button": GrowerDeleteButton
  },
  data() {
    return {
      searchName: "",
      foundGrowers: []
    };
  },
  methods: {
    getGrowers() {
      if (this.growers.length == 0) {
        growerApi.getGrowers().then(response => {
          this.storeGrowers(response.data);
          this.foundGrowers = response.data;
        });
      }
    },
    storeGrowers(growers) {
      this.$store.commit("addGrowers", growers);
    },
    onFoundGrowersChange(foundGrowers) {
      this.foundGrowers = foundGrowers;
    }
  },
  computed: {
    growers() {
      return this.$store.getters.growers;
    },
    visibleGrowers() {
      if (this.foundGrowers && this.foundGrowers.length) {
        return this.foundGrowers;
      } else {
        this.foundGrowers = this.growers;
        return this.growers;
      }
    }
  },
  mounted: function() {
    this.getGrowers();
  }
};
</script>

<style lang="scss" scoped>
div {
  align-items: center;
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
  margin: 20px;

  h1 {
    color: #3bb4c1;
    font-weight: normal;
  }

  .filter {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  table {
    border-collapse: collapse;
    margin: 10px 50px;
    padding: 20px;
    text-align: center;
    width: 100%;
    thead th {
      background-color: #3bb4c1;
      border: 1px solid #ddd;
      color: white;
      font-size: 11px;
      font-weight: normal;
      letter-spacing: 1.11px;
      min-width: 100px;
      padding: 8px;
      text-transform: uppercase;
    }
    tbody tr {
      td {
        background: #fff;
        color: #048998;
        font-size: 13px;
        line-height: 40px;
        padding: 0 10px;

        &:first-child {
          width: 40px;
        }

        :nth-child(even) {
          background-color: #f2f2f2;
        }
      }
      :hover {
        background-color: #f6f5f5;
      }
    }
  }
}
</style>
