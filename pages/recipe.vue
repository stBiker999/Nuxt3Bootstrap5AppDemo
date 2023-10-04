<template>
  <div class="recipe-page">
    <!-- ページのタイトル -->
    <h1>財務会計ページ</h1>

    <!-- ゲームの売上入力フォーム -->
    <div class="sales-form">
      <h2>ゲームの売上記録</h2>
      <form @submit.prevent="recordSales">
        <label for="gameName">ゲームの名前:</label>
        <input type="text" id="gameName" v-model="gameName" required>

        <label for="salesAmount">売上金額:</label>
        <input type="number" id="salesAmount" v-model="salesAmount" required>

        <button type="submit">記録</button>
      </form>
    </div>

    <!-- 経費入力フォーム -->
    <div class="expense-form">
      <h2>経費記録</h2>
      <form @submit.prevent="recordExpense">
        <label for="expenseCategory">経費カテゴリ:</label>
        <input type="text" id="expenseCategory" v-model="expenseCategory" required>

        <label for="expenseAmount">支出金額:</label>
        <input type="number" id="expenseAmount" v-model="expenseAmount" required>

        <button type="submit">記録</button>
      </form>
    </div>

    <!-- 収支情報表示 -->
    <div class="financial-summary">
      <h2>収支情報</h2>
      <p>総収入: {{ totalIncome }} 円</p>
      <p>総経費: {{ totalExpense }} 円</p>
      <p>純利益: {{ netIncome }} 円</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameName: '',
      salesAmount: '',
      expenseCategory: '',
      expenseAmount: '',
    };
  },
  computed: {
    totalIncome() {
      // 総収入を計算するコンピューテッドプロパティ
      // データストアから取得するか、計算ロジックを実装してください
      return 0;
    },
    totalExpense() {
      // 総経費を計算するコンピューテッドプロパティ
      // データストアから取得するか、計算ロジックを実装してください
      return 0;
    },
    netIncome() {
      // 純利益を計算するコンピューテッドプロパティ
      // totalIncomeとtotalExpenseを使用して計算してください
      return this.totalIncome - this.totalExpense;
    },
  },
  methods: {
    recordSales() {
      // ゲームの売上を記録するメソッド
      // フォームから入力されたデータをデータストアに送信または保存してください
    },
    recordExpense() {
      // 経費を記録するメソッド
      // フォームから入力されたデータをデータストアに送信または保存してください
    },
  },
};
</script>

<style scoped>
/* スタイリングを適用するためのCSSを追加 */
.recipe-page {
  padding: 20px;
}

.sales-form, .expense-form, .financial-summary {
  margin-top: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
}

.sales-form h2, .expense-form h2, .financial-summary h2 {
  margin-top: 0;
}
</style>
