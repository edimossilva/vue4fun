<template>
  <form>
    <div>
      <label>Nome:</label>
      <input type="text" v-model="newGrower.name">
    </div>
    <div>
      <label>CPF:</label>
      <input type="text" v-model="newGrower.cpf">
    </div>
    <div>
      <button @click="onSaveGrower(newGrower)">Salvar</button>
    </div>
    {{newGrower}}
    {{grower}}
  </form>
</template>

<script>
export default {
  name: "GrowerForm",
  props: ["grower", "onSaveGrower"],
  data() {
    return {
      newGrower: { name: "", cpf: "" }
    };
  },
  mounted() {
    Object.assign(this.newGrower, this.grower);
  },
  watch: {
    grower: function() {
      Object.assign(this.newGrower, this.grower);
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  div {
    width: 30%;
    display: flex;
    color: #3bb4c1;
    text-transform: uppercase;

    label {
      width: 30%;
      line-height: 26px;
      margin-bottom: 12px;
    }

    input {
      height: 70%;
      margin-left: 10px;
      padding: 6px;
      border: none;
      font-size: 17px;
      flex: 1;
    }
  }

  button {
    background-color: #3bb4c1;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    height: 50px;
    margin-bottom: 10px;
    margin-top: 10px;
    width: 100%;
  }
}
</style>
