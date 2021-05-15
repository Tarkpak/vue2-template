<template>
  <div>
    <h1>login vue</h1>
    <h2>{{ count }}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>

<style>
</style>
