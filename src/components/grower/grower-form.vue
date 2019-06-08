<template>
    <form class="grower-new__form">
      <div class="grower-new__form-item">
        <label>Nome:</label>
        <input
          type="text"
          v-model="newGrower.name"
          />
      </div>
      <div class="grower-new__form-item">
        <label>CPF:</label>
        <input
          type="text"
          v-model="newGrower.cpf"
          />
      </div>
      <div class="grower-new__form-item">
        <button @click="onSaveGrower(newGrower)"> Salvar </button>
      </div>
    {{grower}}
    </form>
</template>

<script>

export default {
  name: "GrowerForm",
  props: ['grower','onSaveGrower'],
  data() {
    return {
      newGrower: {},
    }
  },
  mounted() {
    Object.assign(this.newGrower, this.grower)
  }
}
</script>

<style>
  .grower-new__form {
    display: flex;
    flex-direction: column;
  }
  .grower-new__form-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
    margin-top:8px;
  }
</style>
