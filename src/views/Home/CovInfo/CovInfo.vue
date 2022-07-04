<template>
  <div class="info">
    <div class="title">
      <img
        src="https://img1.dxycdn.com/2021/0111/820/9732351014585228543-22.png"
        width="60rem"
      />
    </div>
    <ul v-for="item in news" :key="item.id">
      <div class="news">
        <div>最新</div>
        <span> {{ item.title }}</span>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.info {
  padding: 0.2rem;
  .title {
    border-left: 4px solid #4169e2;
    padding-left: 0.1rem;
    margin-bottom: 0.2rem;
  }
  p {
    line-height: 0.4rem;
    color: gray;
  }
  .news {
    display: flex;
    margin-bottom: 0.2rem;
    div {
      margin-right: 0.2rem;
      padding: 2px;
      color: white;
      background-color: rgb(247, 76, 49);
      border-radius: 0.05rem;
    }
  }
}
</style>