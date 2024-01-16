<template>
  <el-dropdown v-bind="$attrs" v-on="$listener">
    <slot />
    <template v-if="$slots.dropdown">
      <slot name="dropdown"></slot>
    </template>
    <template v-else>
      <el-dropdown-menu slot="dropdown" :arrow-visible="arrowVisible">
        <el-dropdown-item
          v-for="(option, idx) in options"
          :key="idx"
          v-bind="{ ...option }"
        >
          {{ option.content }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => []
    },
    arrowVisible: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      vm: this,
      slot: this.$slots
    }
  }
}
</script>