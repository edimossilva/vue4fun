<template>
  <div class="item">
    <label>{{ label }}</label>
    <input
      type="text"
      v-model="field"
      disabled
    />
  </div>
</template>

<script>

export default {
  name: "FormItem",
  props: {
    label: String,
    field: {
      type: String,
      default: ''
    }
  },
}
</script>

<style>
</style>
