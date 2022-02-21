import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import { registerMicroApps, start } from "qiankun"


const apps = [
  {
    name: "vueApp", // 应用的名字
    entry: "http://localhost:12000", // 默认会加载这个html, 解析里面的js 动态的执行 (子应用必须支持跨域) fetch
    container: "#vue", // 容器名
    activeRule: "/vue", // 激活的路径
    props: {a: 1}
  },
  {
    name: "reactApp",
    entry: "http://localhost:20000", // 默认会加载这个html, 解析里面的js 动态的执行 (子应用必须支持跨域) fetch
    container: "#react",
    activeRule: "/react",
  },
];

registerMicroApps(apps); //注册应用

start(); // 开启

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
