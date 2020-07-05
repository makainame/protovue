<template>
  <div class='loading'>
    <van-loading type="spinner" size="100" color="#1989fa" vertical>
      加载中...
    </van-loading>
  </div>
</template>

<script>

export default {
  components: {},
  props: [],
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style scoped lang='scss'>
.loading{
  width: 100%;
  height: 100%;
  background-color: #00000020;
  position: fixed;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
