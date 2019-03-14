<template>
  <div id="app">
    <h1 class="page-title">
      <a href="#/">公共模块点击返回首页</a>
    </h1>
    <hr>
    <router-view></router-view>
  </div>
</template>

// <script>
export default {
  name: "app"
};
</script>

<style scope>
@import "./assets/css/App.css";
</style>
