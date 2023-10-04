<template>
  <div class="financial-grid">
    <!-- グリッドのタイトル -->
    <h1>財務会計データ</h1>

    <!-- データグリッド -->
    <div class="data-grid">
      <table>
        <thead>
          <tr>
            <th>日付</th>
            <th>種類</th>
            <th>詳細</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          <!-- データをループして表示 -->
          <tr v-for="(transaction, index) in transactions" :key="index">
            <td>{{ transaction.date }}</td>
            <td>{{ transaction.type }}</td>
            <td>{{ transaction.details }}</td>
            <td>{{ transaction.amount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinancialGrid',
  props: {
    transactions: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
/* スタイリングを適用するためのCSSを追加 */
.financial-grid {
  padding: 20px;
}

.data-grid {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

table th,
table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

table th {
  background-color: #f2f2f2;
}

h1 {
  font-size: 24px;
  margin-bottom: 16px;
}
</style>
