<template>
  <div id="app" :class="theme === 'dark' ? 'dark' : ''">
    <router-view/>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters({
      theme: "getTheme"
    })
  },
}
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.round{
  border-radius: 10px;
}

.dark {
  color: white !important;
  background: #222831 !important;
}

.dark .border{
  border: none !important;
}
</style>
