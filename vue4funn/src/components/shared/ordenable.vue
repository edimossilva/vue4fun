<template>
  <th @click="onItemClick"> {{propertyTitle}} - {{orderingLabel}}</th>
</template>

<script>


export default {
  name: 'Ordenable',
  props: ['list', 'propertyTitle', 'propertyName'],
  data() {
    return {
      asc: true,
    }
  },
  computed: {
    orderingLabel() {
      return this.asc ? '▲' : '▼';
    }
  },
  methods: {
    onItemClick() {
      this.orderByName();
      this.changeOrdering();
    },
    orderByName() {
      this.list.sort(
        (a,b) => {
          const first = a[this.propertyName].toString().toLowerCase();
          const second = b[this.propertyName].toString().toLowerCase()
          first.localeCompare(second)
          return this.asc ? first.localeCompare(second) : second.localeCompare(first)
        }
      )
    },
    changeOrdering() {
      this.asc = !this.asc;
    }
  },
}
</script>

<style>
</style>
