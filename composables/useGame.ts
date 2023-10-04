import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default function useGame() {
  const store = useStore();
  
  // ストアからゲームデータを取得
  const games = computed(() => store.state.gameStore.games);

  // ゲームデータを取得するアクションをディスパッチ
  const fetchGames = async () => {
    try {
      await store.dispatch('gameStore/fetchGames');
    } catch (error) {
      console.error('ゲームデータの取得中にエラーが発生しました', error);
    }
  };

  // ゲームデータを更新
  const updateGames = (updatedGames) => {
    store.commit('gameStore/setGames', updatedGames);
  };

  // ゲームデータを保存
  const saveGame = async (gameData) => {
    try {
      // ゲームデータをAPIに送信するなどの処理を実行

      // 保存が成功したら、更新したゲームデータを取得
      const updatedGames = await fetchUpdatedGameData(); // 仮の関数名です
      updateGames(updatedGames);
    } catch (error) {
      console.error('ゲームデータの保存中にエラーが発生しました', error);
    }
  };

  return {
    games,
    fetchGames,
    saveGame,
  };
}
