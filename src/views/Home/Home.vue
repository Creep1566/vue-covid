<template>
  <div class="home">
    <!-- 1.疫情图片 -->
    <img src="../../assets/image/1.jpg" width="100%" />
    <!-- 2.疫情信息 -->
    <CovInfo :news="news" />
    <!-- 3.小导航 -->
    <div class="list">
      <div>
        <img
          src="https://img1.dxycdn.com/2021/0804/220/9442938684169526943-22.png"
          alt=""
        />
        <div>问医生</div>
      </div>

      <a href="https://dxys-mall.dxy.com/client/page?name=ddhsjc">
        <div>
          <img
            src="https://img1.dxycdn.com/2021/0804/598/2642938684169526943-22.png"
            alt=""
          />
          <div>核酸检测</div>
        </div>
      </a>

      <div>
        <router-link to="/wuzi">
          <img
            src="https://img1.dxycdn.com/2021/0804/827/1742938684169526943-22.png"
            alt=""
          />
          <div>防疫物资</div>
        </router-link>
      </div>

      <div>
        <router-link to="/TravelCity">
          <img
            src="https://img1.dxycdn.com/2021/0804/239/7448668684169526943-22.png"
            alt=""
          />
        </router-link>
        <div>出行政策</div>
      </div>
    </div>
    <!-- 4.数据统计 -->
    <CovNumber :covData="covData" />
    <!-- 5.国内疫情 -->
    <ChinaMap />
    <!-- 世界地图 -->
    <WorldMap />
    <CovSwiper />
  </div>
</template>

<script>
import api from "../../api/index";
import CovInfo from "./CovInfo/CovInfo.vue";
import CovNumber from "./CovInfo/CovNumber.vue";
import ChinaMap from "./VueEcharts/ChinaMap.vue";
import WorldMap from "./VueEcharts/WorldMap.vue";
import CovSwiper from "../../components/CovSwiper";
export default {
  components: {
    CovInfo,
    CovNumber,
    ChinaMap,
    WorldMap,
    CovSwiper,
  },
  data() {
    return {
      news: [],
      covData: {},
    };
  },
  created() {
    api.getCovIofo().then((res) => {
      //console.log("HomeNews", res);
      let data = res.data.newslist[0].desc;
      this.news = res.data.newslist[0].news;
      this.covData = {
        currentConfirmedCount: data.currentConfirmedCount,
        confirmedCount: data.confirmedCount,
        suspectedCoun: data.suspectedCount,
        curedCount: data.curedCount,
        deadCount: data.deadCount,
        seriousCount: data.seriousCount,
        suspectedIncr: data.suspectedIncr,
        currentConfirmedIncr: data.currentConfirmedIncr,
        confirmedIncr: data.confirmedIncr,
        curedIncr: data.curedIncr,
        deadIncr: data.deadIncr,
        seriousIncr: data.seriousIncr,
        yesterdayConfirmedCountIncr: data.yesterdayConfirmedCountIncr,
        yesterdaySuspectedCountIncr: data.yesterdaySuspectedCountIncr,
        highDangerCount: data.highDangerCount,
        midDangerCount: data.midDangerCount,
        modifyTime: data.modifyTime,
      };
    });
  },
};
</script>

<style lang="less" scoped>
.home {
  .list {
    display: flex;
    justify-content: space-around;
    div {
      width: 1.5rem;
      margin: auto;
      img {
        display: block;
        margin: auto;
        width: 40px;
      }
      div {
        text-align: center;
      }
    }
  }
}
</style>