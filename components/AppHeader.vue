<template>
  <header>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item">
            <!-- ロゴやアプリ名を表示する部分 -->
            <img src="logo.png" alt="App Logo" />
            <span class="app-name">Your App Name</span>
          </router-link>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <!-- ナビゲーションメニュー項目 -->
            <router-link to="/dashboard" class="navbar-item">ダッシュボード</router-link>
            <router-link to="/transactions" class="navbar-item">取引履歴</router-link>
            <!-- 他のメニュー項目を追加してください -->
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  // コンポーネントのロジックを追加する場合にここに追加してください
};
</script>

<style scoped>
/* スタイリングを追加してください */
.header {
  background-color: #333;
  color: #fff;
}

.navbar {
  padding: 1rem 0;
}

.app-name {
  font-size: 1.5rem;
  margin-left: 0.5rem;
  vertical-align: middle;
}

.navbar-item {
  color: #fff;
  margin-right: 1rem;
}

/* 他のスタイリングを追加してください */
</style>
