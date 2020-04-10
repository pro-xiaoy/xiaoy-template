<template>
  <div>
    <button
      class="y-button"
      :class="[{'is-disbaled':isLoad }, 'e-button--'+type]"
      @click="getNum"
      :loading="isLoad"
    >
      <span v-if="isShow">查询验证码</span>
      <span v-else>剩余{{ tickTime }}秒</span>
    </button>
  </div>
</template>
<script>
export default {
  name: 'countDown',
  props: {
    num: {
      type: Number
    },
    type: {
      type: String,
      default: 'defaul'
    }
  },
  data () {
    return {
      isShow: true,
      isLoad: false,
      tickTime: this.num
    }
  },
  methods: {
    getNum () {
      if (this.isShow === true) {
        this.isShow = false
        this.isLoad = true
        let interval = window.setInterval(() => {
          if ((this.tickTime--) <= 1) {
            this.tickTime = this.num
            this.isShow = true
            this.isLoad = false
            window.clearInterval(interval)
          }
        }, 1000)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.y-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &.is-disbaled {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
    filter: opacity(0.5);
  }
  &.e-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
  &.e-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }
  &.e-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
  }
  &.e-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
  }
}
</style>
