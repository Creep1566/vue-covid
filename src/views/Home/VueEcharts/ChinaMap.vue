<template>
  <div>
    <div class="title">国内疫情地图</div>
    <div id="chinamap">
      <!-- 类似于v-if没有高亮时累计确诊并没有被渲染出来 -->
      <!-- 由于套用了组件，只有在页面渲染完成时才能读取到id -->
      <van-tabs v-model="active" animated @change="change">
        <van-tab title="现存确诊  ">
          <div id="nowMain" style="width: 7.5rem; height: 7rem"></div>
        </van-tab>
        <van-tab title="累计确诊">
          <div id="Main" style="width: 7.5rem; height: 7rem"></div
        ></van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script >
import api from "../../../api/index";

export default {
  data() {
    return {
      active: 0,
      countConfirm: [],
      nowConfirm: [],
    };
  },
  mounted() {
    api.getChinaData().then((res) => {
      let citys = res.data.retdata;
      let countConfirm = [];
      let nowConfirm = [];
      for (let i = 0; i < citys.length; i++) {
        let count = {};
        let now = {};
        count.name = citys[i].xArea;
        count.value = citys[i].confirm;
        now.name = citys[i].xArea;
        now.value = citys[i].curConfirm;
        countConfirm.push(count);
        nowConfirm.push(now);
      }

      this.nowConfirm = nowConfirm;
      this.countConfirm = countConfirm;
      this.$nextTick(() => {
        this.$myChart.chinaMap("nowMain", nowConfirm);
      });
    });
  },
  methods: {
    change(title) {
      if (title == 1) {
        this.$nextTick(() => {
          this.$myChart.chinaMap("Main", this.countConfirm);
        });
      }
    },
  },
};
</script>

<style scoped>
.title {
  margin: 0.2rem;
  border-left: 4px solid #4169e2;
  font-size: 0.35rem;
  font-weight: 500;
  padding-left: 0.1rem;
  margin-bottom: 0.2rem;
}
</style>