<template>
  <div class="lunbo">
    <div class="title">国内疫情趋势图</div>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in covidInfo" :key="index">
        <img :src="item.image" alt="" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <!-- 图片标题 -->
    <div class="swiperFooter">
      <div
        @click="changeSwiper(index)"
        :class="{ active: index == currentIndex }"
        v-for="(item, index) in covidInfo"
        :key="index"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/index";
export default {
  name: "carrousel",
  data() {
    const that = this;
    return {
      covidInfo: [], //疫情图片
      currentIndex: 0,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        on: {
          slideChangeTransitionEnd: function () {
            // console.log(this.activeIndex); //切换结束时，告诉我现在是第几个slide
            that.currentIndex = this.activeIndex;
          },
        },
        autoplay: true,
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {
    changeSwiper(index) {
      this.swiper.slideTo(index, 500, false);
      this.currentIndex = index;
    },
  },
  mounted() {
    api.getCovSwiper().then((res) => {
      if (res.data.status == 200) {
        this.covidInfo = res.data.result;
      }
    });
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
.lunbo {
  background: #fff;
  padding-top: 0.2rem;
}
.lunbo img {
  width: 100%;
}
.lunbo h2 {
  line-height: 0.6rem;
  font-size: 0.36rem;
  padding-left: 0.2rem;
  font-weight: bold;
}
.swiperFooter {
  display: flex;
}
.swiperFooter > div {
  flex: 1;
  padding: 0.12rem;
  font-size: 0.24rem;
  line-height: 0.32rem;
  margin: 0.1rem;
  background: #eee;
  color: #666;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiperFooter .active {
  color: #4169e2;
  background: #f1f5ff;
  position: relative;
}
</style>