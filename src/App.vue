<template>
  <div id="app">
    <div id="nav">
      <span
        v-for="(item,index) in linkNames"
        :key="index"
      >
        <router-link :to="item.path">
          {{item.name}}
        </router-link> |
      </span>
    </div>
    <router-view />
  </div>
</template>

<script>
const views = require.context('./views', true, /\.vue$/);

export default {
  data() {
    function initLinkNames() {
      return views.keys().map(item => {
        let name = item.slice(2, -4).toLowerCase();
        if (name.indexOf('index') !== -1) name = name.slice(0, -6);
        return {
          path: `/${name}`,
          name,
        };
      });
    }
    return {
      linkNames: initLinkNames(),
    };
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: none;
}
</style>
