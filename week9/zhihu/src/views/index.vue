<template>
  <div class="mainPage">
    <div>
      <router-view></router-view>
    </div>
    <nav class="navBox">
      <div>
        <router-link to="/home">
          <i class="iconfont icon-1"></i>
          <div>首页</div>
        </router-link>
      </div>
      <div>
        <router-link to="/vip">
          <i class="iconfont icon-huiyuan-"></i>
          <div>会员</div>
        </router-link>
      </div>
      <div>
        <i class="iconfont icon-yingyong- add" @click="show"></i>
      </div>
      <div>
        <router-link to="/notify">
          <i class="iconfont icon-tongzhi"></i>
          <div>通知</div>
        </router-link>
      </div>
      <div>
        <router-link to="/user">
          <i class="iconfont icon-icon-user"></i>
          <div>{{loginState ? '我的' : '未登录'}}</div>
        </router-link>
      </div>
    </nav>
    <my-dialog :isshow="flag" @close="close">
      qwertgfdser二万人体育馆发的人的方式热天发v的色染色东方广场v岳父大人反斜杠
    </my-dialog>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapState } from "vuex";
import dialog from "@/components/dialog.vue";
export default {
  name: "index",
  data() {
    return {
      flag: false
    };
  },
  created() {
    /*    if(!localStorage.getItem('token')){
             this.$router.push('/login')
          }
    */
  },
  components: {
    "my-dialog": dialog
  },
  computed: {
    ...mapState(["loginState"])
  },
  methods: {
    show() {
      this.flag = true;
    },
    close() {
      this.flag = false;
    }
  }
};
</script>

<style lang="less" scoped>
//scoped  当前样式 只对当前模板 起作用
.mainPage > div:nth-child(1) {
  padding-bottom: 10vh;
}
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 18vw;
  border-top: 1px solid #eeeeee;
  display: flex;
  align-items: center; //上下居中
  background: #fff;
  > div {
    flex: 1;
    text-align: center;
    > a {
      text-decoration: none;
      color: #333;
      display: block;
      width: 100%;
      height: 100%;
      i {
        font-size: 7vw;
        font-weight: 800;
      }
      div {
        font-size: 5vw;
      }
    }
    i.add {
      font-size: 10vw;
      color: rgb(16, 125, 214);
    }
    a.router-link-active {
      color: rgb(37, 148, 223);
    }
  }
}
</style>