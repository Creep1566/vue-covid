<template>
  <div class="select-city">
    <div class="title">疫情期间出行防疫政策查询</div>
    <van-field
      v-model="fromCity"
      is-link
      readonly
      label="出发城市"
      placeholder="请选择所在地区"
      @click="show = true"
    />
    <van-popup v-model="show" round position="bottom">
      <van-cascader
        v-model="cascaderValue"
        title="请选择所在地区"
        :options="options"
        @close="show = false"
        @finish="onFinish"
      />
    </van-popup>

    <van-field
      v-model="toCity"
      is-link
      readonly
      label="到达城市"
      placeholder="请选择所在地区"
      @click="show2 = true"
    />
    <van-popup v-model="show2" round position="bottom">
      <van-cascader
        v-model="cascaderValue2"
        title="请选择所在地区"
        :options="options"
        @close="show2 = false"
        @finish="onFinish2"
      />
    </van-popup>
    <div class="btn">
      <van-button square type="primary" block @click="goTravelQuery"
        >点击查询</van-button
      >
    </div>
  </div>
</template>

<script>
//import Secret from "../api/mysign";
import api from "../../api/index";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      show: false,
      show2: false,
      fromCity: "", //出发
      toCity: "", //到达
      fromCode: "", //来自标识
      toCode: "", //去到的标识
      cascaderValue: "",
      cascaderValue2: "",
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: "浙江省",
          value: "330000",
          children: [{ text: "杭州市", value: "330100" }],
        },
        {
          text: "江苏省",
          value: "320000",
          children: [{ text: "南京市", value: "320100" }],
        },
      ],
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ value, selectedOptions }) {
      this.show = false;
      this.fromCode = value;
      this.fromCity = selectedOptions.map((option) => option.text).join("/");
    },
    onFinish2({ value, selectedOptions }) {
      this.toCode = value;
      this.show2 = false;
      this.toCity = selectedOptions.map((option) => option.text).join("/");
    },
    ...mapMutations("cityInfo", { updateInfo: "UPDATEINFO" }),
    //点击出行按钮---
    //goTravelQuery() {
    //   api
    //     .getTravelQuery({
    //       from: this.fromCode,
    //       to: this.toCode,
    //     })
    //     .then((res) => {
    //       if (res.status === 200) {
    //         this.info = res.data.result;
    //       }
    //     });
    // },
    goTravelQuery() {
      this.updateInfo({ FromCode: this.fromCode, ToCode: this.toCode });
      this.$router.replace("/CityQuery");
    },
  },
  mounted() {
    api.getTravel().then((res) => {
      //province_id: "1", province: "安徽", citys
      let arr = [];
      if (res.data.result) {
        res.data.result.forEach((ele) => {
          let temp = {};
          temp.text = ele.province;
          temp.value = ele.province_id;
          temp.children = [];
          ele.citys.forEach((child) => {
            let wrap = {};
            wrap.text = child.city;
            wrap.value = child.city_id;
            temp.children.push(wrap);
          });
          arr.push(temp);
        });
      }
      this.options = arr;
    });
  },
};
</script>

<style scoped>
.select-city {
  padding-top: 0.2rem;
  background: #fff;
}
.title {
  margin: 0.2rem;
  border-left: 4px solid #5ed99c;
  font-size: 0.35rem;
  font-weight: 500;
  padding-left: 0.1rem;
  margin-bottom: 0.2rem;
}
.btn {
  padding: 0.3rem;
}
.tavel {
  padding: 18px;
  background: #fff;
}
.tavel h2 {
  font-size: 20px;
}
.tavel h3 {
  font-size: 18px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.tavel p {
  line-height: 24px;
}
</style>