<template>
  <div class="num">
    <div class="content">
      <div class="title">截至北京时间 {{ modifyTime() }}</div>
      <ul class="wrap">
        <li>
          <span>
            较昨日
            <em class="bold"
              >{{ breakNum(posNum(covData.currentConfirmedIncr)) }}
            </em>
          </span>
          <div class="bold">{{ breakNum(covData.currentConfirmedCount) }}</div>
          <strong>现存确诊</strong>
        </li>
        <li>
          <span>
            较昨日
            <em class="bold">{{ breakNum(posNum(covData.suspectedIncr)) }} </em>
          </span>
          <div class="bold">{{ breakNum(covData.suspectedCoun) }}</div>
          <strong>境外输入</strong>
        </li>
        <li>
          <span>
            较昨日
            <em class="bold">{{ breakNum(posNum(covData.seriousIncr)) }} </em>
          </span>
          <div class="bold">{{ breakNum(covData.seriousCount) }}</div>
          <strong>现存无症状</strong>
        </li>
        <li>
          <span>
            较昨日
            <em class="bold">{{ breakNum(posNum(covData.confirmedIncr)) }} </em>
          </span>
          <div class="bold">{{ breakNum(covData.confirmedCount) }}</div>
          <strong>累计确诊</strong>
        </li>
        <li>
          <span>
            较昨日
            <em class="bold">{{ breakNum(posNum(covData.deadIncr)) }} </em>
          </span>
          <div class="bold">{{ breakNum(covData.deadCount) }}</div>
          <strong>累计死亡</strong>
        </li>
        <li>
          <span>
            较昨日
            <em class="bold">{{ breakNum(posNum(covData.curedIncr)) }} </em>
          </span>
          <div class="bold">{{ breakNum(covData.curedCount) }}</div>
          <strong>累计治愈</strong>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["covData"],
  methods: {
    modifyTime() {
      let time = new Date().toLocaleString("chinese", { hour12: false });
      return time;
    },
    posNum(data) {
      return data > 0 ? "+" + data : data;
    },
    breakNum(data) {
      let reg = /\d{1,3}(?=(\d{3})+$)/g;
      let text = String(data);
      return text.replace(reg, "$&,");
    },
  },
};
</script>

<style lang="less" scoped>
.num {
  background: white;
  padding-top: 0.2rem;
  .content {
    background: 244, 244, 244;
    min-height: 2rem;
    border-radius: 0.2rem 0.2rem 0 0;
    .title {
      color: #666;
      margin-top: 0.15rem;
      margin-left: 0.2rem;
      margin-bottom: 0.15rem;
    }
  }
  .wrap {
    display: flex;
    flex-wrap: wrap;
    margin: 0.3rem;
    border-radius: 0.1rem;
    padding-top: 0.2rem;
    box-shadow: 0 0 3px 2px rgba(175, 172, 172, 20%);
    span {
      color: #666;
    }
    div {
      font-size: 0.35rem;
    }
    em {
      font-style: normal;
      font-size: 0.1rem;
      font-weight: 100;
    }
    li {
      width: 33.33333%;
      text-align: center;
      .bold {
        font-weight: bold;
      }
    }
    li:nth-child(1) .bold {
      color: red;
    }
    li:nth-child(2) .bold {
      color: rgb(247, 130, 7);
    }
    li:nth-child(3) .bold {
      color: rgb(168, 90, 78);
    }
    li:nth-child(4) .bold {
      color: rgb(174, 33, 44);
    }
    li:nth-child(5) .bold {
      color: rgb(93, 112, 146);
    }
    li:nth-child(6) .bold {
      color: rgb(40, 183, 163);
    }
  }
}
</style>