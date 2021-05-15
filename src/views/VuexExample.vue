<template>
  <div>
    <div class="output">
      <h3>
        count: <span>{{ count }}</span>
      </h3>
    </div>
    <el-button type="primary" @click="add">add</el-button>
    <el-button type="warning" @click="subtract">subtract</el-button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    add() {
      this.$store.commit('increment')
    },
    subtract() {
      this.$store.commit('subCount')
    }
  }
}
</script>

<style>
</style>