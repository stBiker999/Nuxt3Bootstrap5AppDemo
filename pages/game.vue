<template>
<template>
  <div class="game-page">
    <h1>ゲームページ</h1>
    
    <!-- ゲームデータの表示 -->
    <div class="game-list">
      <div v-for="game in games" :key="game.id" class="game-item">
        <!-- ゲームの情報を表示 -->
        <h2>{{ game.title }}</h2>
        <p>{{ game.description }}</p>
        <p>価格: {{ game.price }} 円</p>
        <p>在庫数: {{ game.stock }}</p>
      </div>
    </div>

    <!-- ゲームの新規登録フォーム -->
    <div class="game-form">
      <h2>新しいゲームを登録</h2>
      <form @submit.prevent="addGame">
        <label for="title">タイトル:</label>
        <input type="text" id="title" v-model="newGame.title" required>

        <label for="description">説明:</label>
        <textarea id="description" v-model="newGame.description" required></textarea>

        <label for="price">価格:</label>
        <input type="number" id="price" v-model="newGame.price" required>

        <label for="stock">在庫数:</label>
        <input type="number" id="stock" v-model="newGame.stock" required>

        <button type="submit">登録</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [], // ゲームデータを格納する配列
      newGame: { // 新しいゲームを登録するためのデータ
        title: '',
        description: '',
        price: 0,
        stock: 0,
      },
    };
  },
  methods: {
    // 新しいゲームを追加するメソッド
    addGame() {
      // 新しいゲームのデータをサーバーに送信するなどの処理を実行
      // 成功した場合はゲームリストを更新するなどの処理を追加
    },
  },
  created() {
    // ゲームデータを取得するメソッドを呼び出すなどの初期化処理を追加
  },
};
</script>

<style scoped>
/* スタイリングを適用するためのCSSを追加 */
.game-page {
  margin: 20px;
}

.game-list {
  display: flex;
  flex-wrap: wrap;
}

.game-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 300px;
}

.game-form {
  margin-top: 20px;
}

/* その他のスタイリングをカスタマイズ */
</style>
