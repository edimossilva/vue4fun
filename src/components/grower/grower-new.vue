<template>
  <div class="rower-new__container">
    <h1 class="grower-new__title">Criar fazendeiro</h1>
    <form class="grower-new__form">
      <div class="grower-new__form-item">
        <label>Nome:</label>
        <input type="text"/>
      </div>
      <div class="grower-new__form-item">
        <label>CPF:</label>
        <input type="text"/>
      </div>
      <div class="grower-new__form-item">
        <button @click="createGrower"> Criar </button>
      </div>
    </form>
  </div>
</template>

<script>
import growerApi from '../../services/grower-api'
export default {
  name: "GrowerNew",
  methods: {
    createGrower() {
      alert('oi');
    },
  },
}
</script>

<style>
  .rower-new__container {
    margin: 0px;
  }
  .grower-new__title {
    text-align: center;
  }
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
