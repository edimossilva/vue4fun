<template>
  <div id="app" class="app__container">
    <routes-menu :routes="routes"></routes-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import { routes } from "./routes";
import RoutesMenu from "./components/routes-menu/RoutesMenu.vue";

export default {
  name: "app",
  components: {
    "routes-menu": RoutesMenu
  },
  data() {
    return {
      routes: routes
    };
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  background: #f6f5f5;
  font-family: "Montserrat", sans-serif;
}
</style>
