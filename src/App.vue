<template>
  <div>
    <el-menu :router="true" mode="horizontal">
      <!-- 基座中可以放自己的路由 -->
      <el-menu-item index="/">Home</el-menu-item>
      <!-- 引用其他自应用 -->
      <el-menu-item index="/vue">Vue应用</el-menu-item>
      <el-menu-item index="/react">React应用</el-menu-item>
    </el-menu>
    <router-view v-show="route === '/'"></router-view>
    <div id="vue"></div>
    <div id="react"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      route: '/',
    }
  },
  watch: {
    $route: {
      handler: function(val){
        const { fullPath } = val;
        this.route = fullPath;
      },
      // 深度观察监听
      deep: true
    }
  }
}
</script>

<style lang="scss"> 
</style>
