// states.ts

export default {
  state: {
    transactions: [] as Transaction[],
    balances: {
      totalIncome: 0,
      totalExpense: 0,
      netIncome: 0,
    },
  },
  mutations: {
    // 取引データを更新するミューテーションを定義
    updateTransactions(state, updatedTransactions: Transaction[]) {
      state.transactions = updatedTransactions;
    },
    // 取引データから残高を計算して更新するミューテーションを定義
    updateBalances(state) {
      let totalIncome = 0;
      let totalExpense = 0;

      for (const transaction of state.transactions) {
        if (transaction.type === '収入') {
          totalIncome += transaction.amount;
        } else if (transaction.type === '支出') {
          totalExpense += transaction.amount;
        }
      }

      state.balances.totalIncome = totalIncome;
      state.balances.totalExpense = totalExpense;
      state.balances.netIncome = totalIncome - totalExpense;
    },
  },
  actions: {
    // 取引データを取得するアクションを定義
    async fetchTransactions(context) {
      try {
        // 取引データをAPIから取得するなどの処理を実行
        const response = await fetch('/api/transactions');
        const transactionsData = await response.json();

        // ミューテーションを介してステートを更新
        context.commit('updateTransactions', transactionsData);

        // 残高を更新
        context.commit('updateBalances');
      } catch (error) {
        // エラーハンドリング
        console.error('取引データの取得中にエラーが発生しました', error);
      }
    },
  },
  getters: {
    // ステートから残高を取得するゲッターを定義
    getBalances: (state) => state.balances,
  },
};

// 取引オブジェクトの型定義
interface Transaction {
  id: number;
  date: string;
  type: '収入' | '支出';
  amount: number;
  details: string;
  // 他のプロパティを追加する場合はここに追加
}
