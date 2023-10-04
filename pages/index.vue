<template>
  <div class="finance-page">
    <h1>財務会計ページ</h1>

    <!-- ゲームの売上記録フォーム -->
    <div class="sales-form">
      <h2>ゲームの売上を記録する</h2>
      <form @submit.prevent="recordSales">
        <label for="gameName">ゲーム名:</label>
        <input type="text" id="gameName" v-model="gameName" required>

        <label for="salesAmount">売上金額:</label>
        <input type="number" id="salesAmount" v-model="salesAmount" required>

        <button type="submit">記録する</button>
      </form>
    </div>

    <!-- 経費記録フォーム -->
    <div class="expense-form">
      <h2>経費を記録する</h2>
      <form @submit.prevent="recordExpense">
        <label for="expenseCategory">支出カテゴリ:</label>
        <input type="text" id="expenseCategory" v-model="expenseCategory" required>

        <label for="expenseAmount">支出金額:</label>
        <input type="number" id="expenseAmount" v-model="expenseAmount" required>

        <button type="submit">記録する</button>
      </form>
    </div>

    <!-- 収支情報表示 -->
    <div class="balance-info">
      <h2>収支情報</h2>
      <p>総収入: {{ totalIncome }} 円</p>
      <p>総支出: {{ totalExpense }} 円</p>
      <p>収支: {{ netIncome }} 円</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameName: '',
      salesAmount: 0,
      expenseCategory: '',
      expenseAmount: 0,
    };
  },
  computed: {
    totalIncome() {
      // 総収入を計算するロジックを追加
      // this.$store.state.finance.transactions からデータを取得して計算
    },
    totalExpense() {
      // 総支出を計算するロジックを追加
      // this.$store.state.finance.transactions からデータを取得して計算
    },
    netIncome() {
      // 収支を計算するロジックを追加
      // totalIncome と totalExpense を使用して計算
    },
  },
  methods: {
    recordSales() {
      // ゲームの売上を記録するロジックを追加
      // this.gameName, this.salesAmount の値を使用
    },
    recordExpense() {
      // 経費を記録するロジックを追加
      // this.expenseCategory, this.expenseAmount の値を使用
    },
  },
};
</script>

<style scoped>
/* スタイリングを適用するためのCSSを追加 */
.finance-page {
  padding: 20px;
}

.sales-form,
.expense-form,
.balance-info {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
