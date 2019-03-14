<template>
  <div id="pageNav">
    <xdNav @navClick="doSth"></xdNav>
    <br>
    <br>
    <br>
    <br>
    <p>我是{{pageItem}}页面</p>
  </div>
</template>

<script>
import xdNav from "../components/xdNav";

export default {
  data() {
    return {
      pageItem: "理财列表"
    };
  },
  components: {
    xdNav
  },
  methods: {
    doSth: function(items, index) {
      this.pageItem = items[index].text;
      console.log(items[index].text + index);
    }
  }
};
</script>

<style src="" lang="scss" module scoped></style>
