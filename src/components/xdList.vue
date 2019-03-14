<template>
  <div>
    <span>{{tipsText}}</span>
    <xdBtn :msg="msg" @btnClick="btnClick"></xdBtn>
  </div>
</template>

<script>
import xdBtn from "./xdButton";
export default {
  props: {
    msg: {
      default: "下载"
    },
    tipsText: {
      default: "默认的文案"
    }
  },
  components: {
    xdBtn
  },
  methods: {
    btnClick: function() {
      alert("按钮点击事件");
    }
  }
};
</script>

<style scoped>
</style>
