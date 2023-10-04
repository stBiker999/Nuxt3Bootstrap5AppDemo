<template>
  <div id="app">
    <!-- メインレイアウトを挿入 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* スタイリングを適用するためのCSSを追加 */
#app {
  font-family: 'Arial', sans-serif;
  text-align: center;
  color: #333;
}

/* ページのスタイリングを追加 */
</style>
