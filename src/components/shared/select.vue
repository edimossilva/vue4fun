<template>
  <div class="item">
    <select v-model="selectedId">
      <option value="" selected disabled hidden>Escolha um valor</option>
      <option
        v-for = "grower in growers"
        v-bind:key = "grower.id"
        v-bind:value = "grower.id"
      >
        {{ grower.id }}
      </option>
    </select>

  </div>
</template>

<script>

export default {
  name: 'FormItem',
  props: ['growers'],
  data() {
    return {
      selectedId: "",
    }
  },
  watch: {
    selectedId: function (val) {
      this.$emit('selectedItemChange', this.selectedId)
    },
  }
}
</script>

<style>
</style>
