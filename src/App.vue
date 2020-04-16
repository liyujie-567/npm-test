<template>
  <div id="app">
    <Echarts></Echarts>
    <util></util>
  </div>
</template>

<script>
import Echarts from './components/Echarts'
import Util from "./components/util";

export default {
  name: 'App',
  components: {
      Util,
    Echarts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
