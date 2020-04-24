<template>
  <transition name="slide-fade">
    <div class="y-dialog_wrapper" @click.self="handleWrapperClick" v-show="visble">
      <div
        class="y-dialog"
        :class="['el-dialog', { 'is-fullscreen': fullscreen, 'el-dialog--center': center }]"
        :style="style"
      >
        <div class="y-dialog-header">
          <span>{{title}}</span>
          <div class="y-dialog_close" @click="dialogclose">x</div>
        </div>
        <div class="y-dialog__body">
          <slot></slot>
        </div>
        <div class="y-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  props: {
    visble: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    fullscreen: Boolean,
    center: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: '15vh'
    },
  },

  computed: {
    style () {
      let style = {};
      if (!this.fullscreen) {
        style.marginTop = this.top;
        if (this.width) {
          style.width = this.width;
        }
      }
      return style;
    }
  },
  methods: {
    handleWrapperClick () {
      console.log('1111')
      this.dialogclose()
    },
    dialogclose () {
      this.$emit('update:visble', false);
    }
  }
}
</script>

<style lang="scss" scope>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.5s;
}
.slide-fade-enter, .slide-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.y-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
}
.y-dialog {
  position: relative;
  margin: 0 auto 50px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  width: 50%;
}
.y-dialog-header {
  padding: 20px 20px 10px;
}
.y-dialog_close {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 16px;
  cursor: pointer;
  line-height: 1;
}
.y-dialog__body {
  padding: 10px 15px;
  color: #606266;
  font-size: 14px;
}

.y-dialog__footer {
  padding: 10px 20px 20px;
}
</style>