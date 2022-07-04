<template>
  <div class="tavel">
    <h2>出游攻略信息 ：</h2>
    <div class="from">
      <h3>{{ info.from_info.city_name }}</h3>
      <p>{{ info.from_info.high_in_desc }}</p>
      <p>{{ info.from_info.low_in_desc }}</p>
      <p>{{ info.from_info.out_desc }}</p>
    </div>
    <div class="to">
      <h3>{{ info.to_info.city_name }}</h3>
      <p>{{ info.to_info.high_in_desc }}</p>
      <p>{{ info.to_info.low_in_desc }}</p>
      <p>{{ info.to_info.out_desc }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import api from "../../api/index";
export default {
  data() {
    return {
      info: {
        from_info: {},
        to_info: {},
      },
    };
  },
  computed: {
    ...mapState("cityInfo", ["fromCode", "toCode"]),
  },
  mounted() {
    api
      .getTravelQuery({
        from: this.fromCode,
        to: this.toCode,
      })
      .then((res) => {
        if (res.status === 200) {
          this.info = res.data.result;
        }
      });
  },
};
</script>

<style scoped>
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