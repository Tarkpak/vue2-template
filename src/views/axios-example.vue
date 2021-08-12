<template>
  <div>
    <el-button type="primary" @click="getHtml">getHTMl</el-button>
    <div v-html="response">hello world</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      response: 'hello world'
    }
  },
  methods: {
    getHtml() {
      axios.get('/hbpu/info/1022/24806.htm').then(res => {
        this.response = res.data
      })
      //   this.response = '<h1>rty</h1>'
    }
  }
}
</script>

<style>
</style>