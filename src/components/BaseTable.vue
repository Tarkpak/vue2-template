<template>
  <div>
    <render-component></render-component>
    <el-table v-bind="$attrs" v-on="$listeners">
      <template v-for="item in columns">
        <!-- render -->
        <el-table-column v-if="item.render" v-bind="item" :key="item.prop">
          <template slot-scope="scope">
            <extend :render="item.render" :params="scope"></extend>
          </template>
        </el-table-column>
        <!-- slot-scope -->
        <el-table-column v-else :key="item.prop" v-bind="item" show-overflow-tooltip>
          <template slot-scope="scope">
            <span v-if="item.slotName">
              <slot :name="item.slotName" :scope="scope" />
            </span>
            <span v-else>{{scope.row[item.prop]}}{{item.type}}</span>
          </template>
        </el-table-column>

      </template>
    </el-table>

    <!-- <el-pagination v-if="enablePagination" background :total="pagination.totalRow"
      :current-page="pagination.pageIndex" :page-size="pagination.pageSize"
      :page-sizes="pagination.pageSizes" :layout="pagination.layout" @size-change="sizeChange"
      @current-change="currentChange">
    </el-pagination> -->
    <!-- <el-pagination :current-page="page" :page-sizes="[10, 25, 50, 100]" :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper" :total="total"
          @size-change="handleSizeChange" @current-change="handlePageChange" /> -->
  </div>
</template>
<script>
import extend from './extend.js';
import RenderComponent from './RenderComponent.js';
export default {
  name: 'BaseTable',
  components: { extend, RenderComponent },
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    pagination: {
      type: Object,
      default: () => ({
        layout: 'total, sizes, prev, pager, next, jumper',
        pageSizes: [10, 25, 50, 100],
      }),
    },
    layout: {
      type: Object,
      default: () => ({}),
    },
    enablePagination: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    /**
     * 切换分页数量
     * @param { Number } pageSize 页数
     */
    sizeChange(pageSize) {
      this.pagination.pageIndex = 1;
      this.pagination.pageSize = pageSize;
      this.queryData();
    },
    /**
     * 切换页码
     * @param { Number } pageIndex 页码
     */
    currentChange(pageIndex) {
      this.pagination.pageIndex = pageIndex;
      this.queryData(true);
    },
  },
};
</script>
