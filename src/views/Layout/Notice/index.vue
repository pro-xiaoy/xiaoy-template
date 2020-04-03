<template>
 <div>
  <h1>公告</h1>
  <p>基于vue</p>
  <div>
    <p>示例</p>
    <notice :content='text'></notice>
  </div>
  <readme></readme>
 </div>
</template>
<script>
// import readme from './readme.md'
export default {
  components: {
    // readme
  },
  data () {
    return {
      text: '公告信息，欢迎xxx来xxx公司，本系统2018-04-17上线'
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
