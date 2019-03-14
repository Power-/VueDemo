<template>
  <div>
    <button @click="btnClick">
      <slot name="icon"></slot>
      <span>{{msg}}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      default: "下载！"
    }
  },
  methods: {
    btnClick: function() {
      alert("你点击了子组件的按钮");
      this.$emit("btnClick");
    }
  }
};
</script>

<style>
</style>

