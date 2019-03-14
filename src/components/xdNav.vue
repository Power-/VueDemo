<template>
  <!-- <div>
    <a v-for="(item, index) in items">
      <span>{{item.text}}</span>
    </a>
  </div>-->
  <div class="xd-nav nav-type-1">
    <a v-for="item in items" :key="item.id" :class="[commonClass, item.active?activeClass : '']">
      <span class="nav-txt">{{item.text}}</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commonClass: "nav-item",
      activeClass: "active",
      items: [
        {
          text: "理财列表",
          active: true
        },
        {
          text: "变现通",
          active: false
        }
      ]
    };
  }
};
</script>

<style scoped>
.xd-nav {
  display: -webkit-box -webkit-flex flex;
  font-size: 0;
  text-align: center;
}
.xd-nav .nav-item {
  -webkit-flex: 1;
  flex: 1;
  height: 40px;
  line-height: 40px;
  position: relative;
  font-size: 18px;
  overflow: hidden;
}
.xd-nav .nav-item .nav-txt {
  display: block;
  position: relative;
  height: 100%;
}
.xd-nav .nav-item .nav-txt:after {
  content: "";
  display: block;
  position: relative;
  height: 4px;
  background-color: #ffcd00;
  opacity: 0;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
.xd-nav .nav-item.active {
  color: #ffcd00;
}
.xd-nav .nav-item.active .nav-txt:after {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  opacity: 1;
}
/*active态下方不铺满*/
.xd-nav.nav-type-2 .nav-item .nav-txt {
  display: inline-block;
  padding: 0 5px;
}

/*居中*/
.xd-nav.nav-type-3 {
  display: block;
}
.xd-nav.nav-type-3 .nav-item {
  -webkit-flex: inherit;
  flex: inherit;
  display: inline-block;
  width: 110px;
}
</style>
