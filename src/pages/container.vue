<template>
  <div class="container">
    <div class="nav">
      <div class="y_main-aside">
        <div class="y_nav-title">组件库</div>
        <div class="y_el-menu">
          <div class="y_el-menu-title">
            <router-link to="/" class="router-link-a">功能化</router-link>
          </div>
          <div class="y_el-menu-item">
            <router-link to="/countDown" class="router-link-a">countDown-倒计时</router-link>
          </div>
          <div class="y_el-menu-item">
            <router-link to="/Notice" class="router-link-a">notice-跑马灯</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "container",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  flex-direction: row;
  .nav {
    width: 200px;
    box-sizing: border-box;
    border-right: 1px solid #ccc;
  }
  .main {
    flex: 1;
    padding-left: 80px;
  }
  .y_nav-title {
    padding: 10px 14px;
    font-weight: 800;
  }
  .y_el-menu-title {
    padding: 7px 0 7px 20px;
    line-height: normal;
    font-size: 12px;
    color: #909399;
  }
  .y_el-menu-item {
    font-size: 14px;
    color: #303133;
    padding: 0 20px;
    cursor: pointer;
    -webkit-transition: border-color 0.3s, background-color 0.3s, color 0.3s;
    transition: border-color 0.3s, background-color 0.3s, color 0.3s;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding-left: 20px;
  }
}
</style>