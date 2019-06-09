<template>
  <div>
    <label>
      {{ propertyTitle }}:
      <input type="search" v-model="searchName">
    </label>
  </div>
</template>

<script>
export default {
  name: "MyFilter",
  props: ["list", "propertyTitle", "propertyName"],
  data() {
    return {
      searchName: ""
    };
  },
  methods: {
    serchByName(item) {
      const propertyName = item[this.propertyName].toLowerCase();
      const searchName = this.searchName.toLowerCase();
      return propertyName.includes(searchName);
    }
  },
  watch: {
    searchName: function(val) {
      if (this.searchName) {
        const foundItems = this.list.filter(this.serchByName);
        this.$emit("foundItemsChange", foundItems);
      } else {
        this.$emit("foundItemsChange", this.list);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  color: #3bb4c1;
  text-transform: uppercase;
  label {
    input {
      padding: 6px;
      border: none;
      margin: 8px 16px 0 8px;
      font-size: 17px;
    }
  }
}
</style>
