<template>
  <div>
    <h1>倒计时</h1>
    <p>基于vue，ele-ui</p>
    <button @click="dialogvisble = true">dialog 展示按钮</button>
    <!-- <count-down :num="10" type="success"></count-down> -->
    <y-dialog :visble.sync="dialogvisble" title="e42e3e22e2e2">
      <div>form</div>
      <div slot="footer">name is xie</div>
    </y-dialog>
    <read-me></read-me>
  </div>
</template>
<script>
import YDialog from '@/components/dialog/index.vue'
import readMe from './readme.md'
export default {
  components: {
    YDialog,
    readMe
  },
  data () {
    return {
      dialogvisble: false
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
