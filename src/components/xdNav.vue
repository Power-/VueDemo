<template>
  <!-- <div>
    <a v-for="(item, index) in items">
      <span>{{item.text}}</span>
    </a>
  </div>-->
  <div class="xd-nav nav-type-1">
    <a
      v-for="(item, index) in items"
      :key="item.id"
      :class="[commonClass, item.active?activeClass : '']"
      @click="navClick(items, index)"
    >
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
  },
  methods: {
    navClick: function(items, index) {
      items.forEach(element => {
        element.active = false;
      });
      items[index].active = true;
      this.$emit("navClick", items, index);
    }
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
  display: inline-block;
  position: relative;
  height: 100%;
  width: 50%;
}
.xd-nav .nav-item .nav-txt:after {
  content: "";
  display: block;
  height: 4px;
  background-color: #ffcd00;
  opacity: 0;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
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
</style>
