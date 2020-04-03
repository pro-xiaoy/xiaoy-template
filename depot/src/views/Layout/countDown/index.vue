<template>
    <div>
        <h1>倒计时</h1>
        <p>基于vue，ele-ui</p>
        <count-down :num='10'></count-down>
        <read-me></read-me>
    </div>
</template>
<script>
import countDown from '@/components/countDown/index.vue'
import readMe from './readme.md'
export default {
  components: {
    countDown,
    readMe
  }
}
</script>
<style lang="scss" scoped>

</style>
