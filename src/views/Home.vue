<template>
  <div class="home">
    <input
      v-bind:value="inputValue"
      @input="inputChange"
    />
    <el-input
      v-model="name"
      @keyup.enter="handleEnterUP"
    />
    <el-input
      v-model="name"
      @keyup.enter.native="handleEnterUPNative"
    />
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      inputValue: '',
      name: 'yangsheng'
    };
  },
  components: {
    HelloWorld,
  },
  methods: {
    handleEnterUP(e) {
      console.log(e);
    },
    handleEnterUPNative(e) {
      console.log(e);
    },
    inputChange(event) {
      let keyword = event.target.value;
      console.log(keyword);
      this.remoteMethod(keyword);
    },
    remoteMethod(keyword) {
      return this.debounce(() => {
        console.log('res: ' + keyword);
      })();
    },
    debounce(fn, delay = 2000) {
      var timer;
      return function () {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
          fn.apply(this, arguments);
        }, delay);
      };
    },
  },
};
</script>
