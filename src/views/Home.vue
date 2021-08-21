<template>
  <div class="home">
    <el-input type="text" @input="inputChange" :value="inputValue" />
  </div>
</template>

<script>
import utils from '@/utils/index.js'
import _ from 'lodash'


export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      inputValue: '',
    }
  },
  mounted() {
  },
  methods: {
    inputChange(event) {
      const keyword = event.target.value
      console.log('XXXXXX:', keyword)
      this.remoteMethod(keyword)
    }
  }
}
</script>
