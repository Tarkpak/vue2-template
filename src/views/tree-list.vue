<template>
  <div class="menu">
    <div class="left">
      <el-tree
        class="treeitems"
        :data="data"
        show-checkbox
        node-key="id"
        :props="defaultProps"
        @node-click="handleNodeClick"
        @check-change="handleCheck"
        default-expand-all
        ref="tree"
      >
      </el-tree>
    </div>
    <div class="right">
      <el-table
        :data="tableData"
        style="width: 100%"
        max-height="650"
      >
        <el-table-column
          fixed
          prop="label"
          label="城市"
          width="160"
        >
        </el-table-column>
        <el-table-column
          fixed
          prop="id"
          label="id"
          width="160"
        >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100"
        >
          <template slot-scope="scope">
            <i
              @click="deleteRow(scope.$index, tableData,scope.row.id)"
              class="tablei el-icon-delete"
            >
            </i>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      data: [
        {
          id: 0,
          label: '中国',
          children: [
            {
              id: 1,
              label: '北京',
              children: [
                {
                  id: 11,
                  label: '通州',
                },
                {
                  id: 17,
                  label: '顺义',
                },
              ],
            },
            {
              id: 3,
              label: '山西',
              children: [
                {
                  id: 13,
                  label: '太原',
                },
                {
                  id: 14,
                  label: '阳泉',
                },
                {
                  id: 16,
                  label: '长治',
                },
              ],
            },
            {
              id: 4,
              label: '黑龙江',
              children: [
                {
                  id: 12,
                  label: '哈尔滨',
                },
                {
                  id: 13,
                  label: '齐齐哈尔市',
                },
                {
                  id: 14,
                  label: '牡丹江',
                },
                {
                  id: 15,
                  label: '佳木斯',
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    };
  },
  watch: {},
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    //  复选框点击事件
    handleCheck(data, change) {
      let nodes = this.$refs.tree
        .getCheckedNodes()
        .concat(this.$refs.tree.getHalfCheckedNodes());
      let filterNodes = nodes.filter(node => {
        //  过滤出子节点，也就是不含childred字段的节点数据
        return node.children === undefined;
      });
      this.tableData = filterNodes; //赋值给表格数据
    },
    //  删除按钮
    deleteRow(index, rows, id) {
      this.$refs.tree.setChecked(id, false); //  取消左侧复选框的选中状态
      rows.splice(index, 1); //  从tableData中删除数据
    },
    //  复选框默认选中状态,应在请求数据处调用
    //  现在用的是本地数据，如果导入的是请求后的来的数据，并且有返回是否选中的字段，可以将已选中的那些数据的id遍历出来一个数组，类似于[1,2,3],然后放到下方；
    selection(arrDa) {
      this.$nextTick(() => {
        this.$refs.tree.setCheckedKeys([], true); //  默认选中状态
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.menu {
  display: flex;
  .left {
    width: 25%;
  }
  .right {
    width: 85%;
  }
}
</style>
