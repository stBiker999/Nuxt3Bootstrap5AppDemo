<template>
  <div>
    <h1>{{ dynamicContent }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    // ルートパラメータを受け取り、動的なコンテンツを生成
    dynamicContent() {
      // this.$route.params はルートパラメータへの参照です
      const slug = this.$route.params.slug;

      // slug パラメータを利用して動的なコンテンツを生成する処理を記述
      // 例: データベースから該当のコンテンツを取得

      return `動的なコンテンツ: ${slug}`;
    },
  },
};
</script>
