<template>
  <div>
    <h1>Listar Propriedades</h1>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Área</th>
          <th>Cidade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="property in properties" v-bind:key="property.id">
          <td>{{property.id}}</td>
          <td>{{property.name}}</td>
          <td>{{property.total_area}}</td>
          <td>{{property.city}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import propertyApi from "../../services/property-api";
export default {
  name: "PropertyList",
  props: ["growerId"],
  data() {
    return {
      properties: []
    };
  },
  methods: {
    getProperties(growerId) {
      propertyApi
        .getProperties(growerId)
        .then(newProperties => (this.properties = newProperties));
    }
  },
  mounted: function() {
    this.getProperties(this.growerId);
  },
  watch: {
    growerId: function() {
      this.getProperties(this.growerId);
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  border-collapse: collapse;

  h1 {
    font-weight: normal;
    color: #3bb4c1;
  }

  .filter {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  table {
    width: 100%;
    text-align: center;
    margin: 10px 50px;
    padding: 20px;
    border-collapse: collapse;
    thead th {
      min-width: 100px;
      background-color: #3bb4c1;
      color: white;
      border: 1px solid #ddd;
      padding: 8px;
      font-size: 11px;
      letter-spacing: 1.11px;
      font-weight: normal;
      text-transform: uppercase;
    }
    tbody tr {
      td {
        font-size: 13px;
        padding: 0 10px;
        line-height: 40px;
        background: #fff;
        color: #048998;

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
