<template>
  <div>
    <my-dialog :dialogVisible="visible"></my-dialog>
    <el-button @click="showDialog">show dialog</el-button>
  </div>
</template>

<script>
import myDialog from '@/components/MyDialog.vue';
export default {
  components: { myDialog },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showDialog() {
      this.visible = true;
    },
  },
};
</script>
