<template>
 <div class="example" ref="example">
  <div class="notice-body" ref="noticeBody">
    <div class="notice-containr" ref="scrollDiv" @click="openNotice" @mouseover="handMouseOver" @mouseout="handMouseOut">
     <i class="el-icon-bell" style="margin-right: 10px"></i>
     <span>{{content}}</span>
    </div>
  </div>
 </div>
</template>
<script>
export default {
  name: 'Notice',
  props: {
    content: {
      type: String
    }
  },
  data () {
    return {
      left: this.biDivWidth,
      scollSwidth: true,
      timer: null
    }
  },
  mounted () {
    // this.bigDiv = document.body.scrollWidth - 400
    // 父级的宽度
    this.bigDiv = this.$refs.example.clientWidth
    this.left = this.bigDiv
    const scrollDiv = this.$refs.scrollDiv.style
    const scrollWidth = this.$refs.scrollDiv.offsetWidth
    window.setInter = window.setInterval(() => {
      if (this.scollSwidth) {
        if (this.left < -scrollWidth) {
          this.left = this.bigDiv
          scrollDiv.left = this.left + 'px'
        } else {
          this.left = this.left - 0.2
          scrollDiv.left = this.left + 'px'
        }
      }
    }, 5)
  },
  methods: {
    openNotice () {
      this.$notify({
        title: '公告',
        message: this.content,
        duration: 0
      })
    },
    handMouseOver () {
      this.scollSwidth = false
    },
    handMouseOut () {
      this.scollSwidth = true
    }
  }
}
</script>
<style lang="scss" scoped>
.example {
 overflow-x: auto;
 .notice-body {
  display: block;
  height: 100%;
  overflow: hidden;
 }
 .notice-containr {
  position: relative;
  white-space: nowrap;
  cursor: pointer;
 }
}
</style>
