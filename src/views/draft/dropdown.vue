<template>
  <div>
    <mDropDown :options="options" split-button type="primary">
        下拉菜单
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-eleme">黄金糕</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </mDropDown>
  </div>
</template>

<script>
import mDropDown from "@/components/mDropDown";

export default {
  components: { mDropDown },
  data() {
    return {
      options: [
        {
          content: '操作一',
          value: 1,
        },
        {
          content: '操作二',
          value: 2,
          disabled: true,
        },
        {
          content: '操作三',
          value: 3,
          icon: 'el-icon-eleme',
          divided: true,
        },
        {
          content: '操作四',
          value: 4,
        },
      ],
    }
  }
}
</script>

<style>
</style>