<template>
  <div id="app">
    <con-tainer></con-tainer>
  </div>
</template>

<script>
import conTainer from './pages/container'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    'conTainer': conTainer
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #2c3e50;
  text-decoration: none;
}
</style>
