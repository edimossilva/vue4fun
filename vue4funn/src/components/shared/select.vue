<template>
  <div class="item">
    <select v-model="selectedId">
      <option value selected disabled hidden>Escolha um valor</option>
      <option
        v-for="grower in growers"
        v-bind:key="grower.id"
        v-bind:value="grower.id"
      >{{ grower.name }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "FormItem",
  props: ["growers"],
  data() {
    return {
      selectedId: ""
    };
  },
  watch: {
    selectedId: function(val) {
      this.$emit("selectedItemChange", this.selectedId);
    }
  }
};
</script>

<style lang="scss" scoped>
div select {
  width: 100%;
  background-color: #048998;
  border: none;
  width: 270px;
  height: 50px;
  font-size: 18px;
  color: #fff;
}
</style>
