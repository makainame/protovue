<template>
  <div id="app">
    <router-view/>
    <Load v-if='isLoading'></Load>
  </div>
</template>

<script>
import Load from '@/components/loading'
import { mapGetters } from 'vuex'

export default {
  components: {
    Load
  },
  props: [],
  data () {
    return {}
  },
  watch: {},
  computed: mapGetters({
    isLoading: 'getLoading'
  }),
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style scoped lang="scss">
#app{
  font-size: .16rem;
}
</style>
