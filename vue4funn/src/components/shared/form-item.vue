<template>
  <div>
    <label>
      {{ label }}
      <input type="text" v-model="field" disabled>
    </label>
  </div>
</template>

<script>
export default {
  name: "FormItem",
  props: {
    label: String,
    field: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  color: #3bb4c1;
  display: flex;
  text-transform: uppercase;

  label {
    align-items: center;
    display: flex;
    justify-content: flex-end;
    line-height: 26px;
    margin-bottom: 12px;
    width: 30%;
  }
  input {
    border: none;
    font-size: 17px;
    flex: 1;
    margin-left: 20px;
    padding: 6px;
    width: 70%;
  }
}
</style>
