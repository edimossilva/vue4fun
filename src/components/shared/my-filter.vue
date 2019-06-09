<template>
  <div class="rower-list__container">
    <label>{{ propertyTitle }}:</label>
    <input
      type="search"
      v-model="searchName"
    />
  </div>
</template>

<script>
export default {
  name: "MyFilter",
  props: ['list','propertyTitle','propertyName'],
  data() {
    return {
      searchName:'',
    }
  },
  methods: {
    serchByName(item) {
      const propertyName = item[this.propertyName].toLowerCase();
      const searchName = this.searchName.toLowerCase();
      return propertyName.includes(searchName);
    }
  },
  watch: {
    searchName: function (val) {
      if (this.searchName) {
        const foundItems = this.list.filter(this.serchByName);
        this.$emit('foundItemsChange', foundItems)
      } else {
        this.$emit('foundItemsChange', this.list)
      }
    },
  }
}
</script>

<style>
</style>
