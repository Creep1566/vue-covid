<template>
  <div>
    <div>{{ cityname }}</div>
    <div id="city" style="width: 7.5rem; height: 7rem"></div>
  </div>
</template>

<script>
import api from "../../api/index";
export default {
  props: ["cityname"],
  mounted() {
    api.getCity(this.cityname).then((res) => {
      console.log("City", res);

      let arr = res.data.retdata.subList;
      let newArr = [];
      arr.forEach((element) => {
        let obj = {};
        obj.name = element.city;
        if (
          obj.name.charAt(obj.name.length - 1) !== "州" &&
          obj.name.charAt(obj.name.length - 1) !== "区" &&
          obj.name.charAt(obj.name.length - 1) !== "旗" &&
          obj.name.charAt(obj.name.length - 1) !== "盟"
        ) {
          obj.name += "市";
        }

        obj.value = element.confirm;
        newArr.push(obj);
      });
      console.log("CitynewArr", newArr);
      this.$myChart.cityMap("city", this.cityname, newArr);
    });
  },
};
</script>

<style>
</style>