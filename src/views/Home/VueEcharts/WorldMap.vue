<template>
  <div>
    <div class="title">国外疫情地图</div>
    <div id="WorldMap" style="width: 7.5rem; height: 7rem"></div>
  </div>
</template>

<script>
import api from "../../../api/index";
export default {
  mounted() {
    api.getWorldData().then((res) => {
      let World = res.data.retdata;
      let worldData = [];
      for (let i = 0; i < World.length; i++) {
        let arr = {};
        arr.name = World[i].xArea;
        arr.value = World[i].curConfirm;
        worldData.push(arr);
      }
      //console.log("WorldMap", worldData);

      this.$myChart.WorldMap("WorldMap", worldData);
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
</style>