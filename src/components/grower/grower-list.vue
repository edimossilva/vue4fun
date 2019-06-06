<template>
  <div>
    <h1>Growers List</h1>
    <h2 v-for="grower in growers" v-bind:key="grower.id">
      {{grower.name}} - CPF:{{grower.cpf}}
    </h2>
  </div>
</template>

<script>
export default {
  name: "GrowerList",
  data() {
    return {
      growers: []
    };
  },
  methods: {
    getGrowers() {
      this.$http
        .get("https://my-json-server.typicode.com/pedroskakum/fake-api/grower")
        .then(response => (growers = this.getGrowersFromJson(response.body)));
    },
    getGrowersFromJson(json) {
      this.growers = json;
    }
  },
  mounted: function() {
    growers = this.getGrowers();
  }
};
</script>

<style>
</style>
