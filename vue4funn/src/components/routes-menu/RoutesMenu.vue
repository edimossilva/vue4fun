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
  align-items: center;
  height: 80px;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  width: 100%;
  li,
  .router-link {
    color: #fff;
    text-decoration: none;

    :hover {
      color: #e9e4e6;
    }
  }
}
</style>
