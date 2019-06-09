<template>
  <div class="rower-list__container">
    <label>Nome:</label>
    <input
      type="search"
      v-model="searchName"
    />
  </div>
</template>

<script>
import growerApi from '../../services/grower-api'
export default {
  name: "GrowersFilter",
  props: ['growers'],
  data() {
    return {
      searchName:'',
    }
  },
  methods: {
    serchByName(grower) {
      const groweName = grower.name.toLowerCase();
      const searchName = this.searchName.toLowerCase();
      return groweName.includes(searchName);
    }
  },
  watch: {
    searchName: function (val) {
      if (this.searchName) {
        const foundGrowers = this.growers.filter(this.serchByName);
        this.$emit('foundGrowersChange', foundGrowers)
      } else {
        this.$emit('foundGrowersChange', this.growers)
      }
    },
  }
}
</script>

<style>
</style>
