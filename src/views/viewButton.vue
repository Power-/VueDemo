<template>
  <div>
    <xdBtn msg="警告" @btnClick="doMoreSth">
      <img slot="icon" src="../assets/logo.png" alt>
    </xdBtn>
    <br>请输入GitHub ID:
    <input type="text" v-model="uid">
    <br>
    <xdBtn msg="拿数据" @btnClick="getData"></xdBtn>
    <br>
    用户名字:{{user.name}}
    <br>
    登录名：{{user.login}}
    <br>
    创建日期：{{user.created_at}}
    <br>
    更新日期：{{user.updated_at}}
  </div>
</template>

<script>
import xdBtn from "../components/xdButton";
import axios from "axios";

export default {
  name: "viewButton",
  data: function() {
    return {
      uid: "",
      user: {
        name: "",
        login: "",
        created_at: "",
        updated_at: ""
      }
    };
  },
  components: {
    xdBtn
  },
  methods: {
    doMoreSth: function() {
      alert("我回到了父组件里！");
    },
    getData: function() {
      alert("我先准备一下!");
      axios.get("https://api.github.com/users/" + this.uid).then(resp => {
        // console.log(resp.data);
        this.user = resp.data;
      });
    }
  }
};
</script>

<style src="" lang="scss" module scoped></style>
