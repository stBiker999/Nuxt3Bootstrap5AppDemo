<template>
  <div class="app">
    <!-- ヘッダー -->
    <header>
      <!-- ヘッダーコンポーネントを挿入 -->
      <app-header></app-header>
    </header>

    <!-- メインコンテンツ -->
    <main>
      <!-- ページコンテンツを挿入 -->
      <router-view></router-view>
    </main>

    <!-- フッター -->
    <footer>
      <!-- フッターコンポーネントを挿入 -->
      <app-footer></app-footer>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  components: {
    // ヘッダーとフッターのコンポーネントをインポートして登録する
    'app-header': AppHeader,
    'app-footer': AppFooter,
  },
};
</script>

<style scoped>
/* スタイリングを適用するためのCSSを追加 */
.app {
  font-family: 'Arial', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #333;
  color: white;
  padding: 1rem;
}

main {
  flex-grow: 1;
  padding: 2rem;
}

footer {
  background-color: #333;
  color: white;
  padding: 1rem;
}
</style>
