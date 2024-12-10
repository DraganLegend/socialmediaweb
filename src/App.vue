<template>
  <div id="app">
    <!-- 路由渲染區域 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* 可以保留你的全局樣式，例如背景 */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: linear-gradient(to bottom, #e0f7fa, #ffffff); /* 單一方向的漸層 */
  font-family: 'Arial', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  width: 100%;
  height: 100%;
}
</style>