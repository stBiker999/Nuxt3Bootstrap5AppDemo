// gameStore.ts

import { Module, VuexModule, Mutation, Action } from 'vuex';

@Module({ namespaced: true })
export default class GameStore extends VuexModule {
  // ステート（データ）の初期値
  games: Game[] = [];

  // ミューテーション（ステートの変更）を定義
  @Mutation
  setGames(payload: Game[]) {
    this.games = payload;
  }

  // アクション（非同期処理やミューテーションの実行）を定義
  @Action({ commit: 'setGames' })
  async fetchGames() {
    try {
      // ゲームデータをAPIから取得するなどの処理を実行
      const response = await fetch('/api/games');
      const gamesData = await response.json();
      
      // ゲームデータを返す（ミューテーションによってコミットされます）
      return gamesData;
    } catch (error) {
      // エラーハンドリング
      console.error('ゲームデータの取得中にエラーが発生しました', error);
      throw error; // エラーを呼び出し元に伝える
    }
  }
}

// ゲームオブジェクトの型定義
interface Game {
  id: number;
  title: string;
  platform: string;
  releaseDate: string;
  // 他のプロパティを追加する場合はここに追加
}
