<template>
    <div>
        <el-button type="primary" @click="getNum" :loading="isLoad">
            <span v-if="isShow">查询验证码</span>
            <span v-else>剩余{{ tickTime }}秒</span>
        </el-button>
    </div>
</template>
<script>
export default {
  name: 'countDown',
  props: {
    num: {
      type: Number
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

</style>
