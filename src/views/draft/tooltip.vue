<template>
  <div>
    <h1>show or hide tooltip</h1>
    <el-switch v-model="content" inactive-value="我在家吃饭、"
      active-value="我在家吃饭、我在家吃饭、我在家吃饭、我在家吃饭、我在家吃饭、我在家吃饭、我在家吃饭、我在家吃饭、我在家吃饭、我在家吃饭、我在家吃饭、"
      style="display:block; margin-bottom:18px;">show or hide</el-switch>
    <el-tooltip :content="content" :disabled="!showTooltip" placement="top">
      <div ref="content" class="content" @mouseenter="handleMouseEnter">{{content}}</div>
    </el-tooltip>
    <div style="margin-top: 20px;">
      <div class="label">
        clientWidth: {{ clientWidth}}
      </div>
      <div class="label">
        clientWidth: {{ clientWidth}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTooltip: false,
      domInstance: {},
      content: '',
    };
  },
  watch: {
    content(val) {
      this.domInstance = this.$refs.content;
      this.showTooltip = this.domInstance.clientWidth < this.domInstance.scrollWidth;
      // console.log(this.domInstance.clientWidth, this.domInstance.scrollWidth);
    },
  },
  computed: {
    clientWidth() {
      return this.domInstance.clientWidth;
    },
    scrollWidth() {
      return this.domInstance.scrollWidth;
    },
  },
  methods: {
    handleMouseEnter() {
      // this.domInstance = this.$refs.content;
      // this.showTooltip = this.domInstance.clientWidth < this.domInstance.scrollWidth;
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  width: 200px;
  line-height: 20px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.label {
  margin: 8px 0;
}
</style>