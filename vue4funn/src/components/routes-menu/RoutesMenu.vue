<template>
  <nav>
    <ul>
      <li v-for="route in routes" :key="route.path">
        <router-link class="router-link" :to="route.path">{{route.title}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    routes: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
nav {
  background-color: #048998;
}
nav,
ul {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;
  li,
  .router-link {
    text-decoration: none;
    color: #fff;

    :hover {
      color: #e9e4e6;
    }
  }
}
</style>
