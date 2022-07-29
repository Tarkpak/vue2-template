<template>
  <div>
    <base-table :columns="columns" :data="tableData">
      <template slot="operation" slot-scope="{scope}">
        <el-link type="primary" @click="test=scope">click</el-link>
      </template>
    </base-table>
    <!-- <el-table :data="tableData">
      <el-table-column v-for="item in columns" :key="item.prop" :prop="item.prop"
        :label="item.label">
        <template slot="operation" slot-scope="scope" >
          <el-link>china</el-link>
        </template>
      </el-table-column>
    </el-table> -->
    <!-- <el-table ref="table" :data="tableData">
      <el-table-column type="selection" />
      <el-table-column label="报告名称" prop="name" align="center" />
      <el-table-column label="任务ID" prop="id" align="center" min-width="120" />
      <el-table-column label="报告周期" prop="cycle" align="center" />
      <el-table-column label="生产进度" prop="process" align="center" />
      <el-table-column label="状态" prop="status" align="center" />
      <el-table-column label="更新时间" prop="updated_at" align="center" />
      <el-table-column label="操作" prop="operation" align="center">
        <template slot-scope="scope">
          <el-link>{{scope.row.operation}}china</el-link>
        </template>
      </el-table-column>
    </el-table> -->
    <!--   <el-pagination :current-page="page" :page-sizes="[10, 25, 50, 100]" :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper" :total="total"
          @size-change="handleSizeChange" @current-change="handlePageChange" /> -->

  </div>
</template>

<script>
import BaseTable from '@/components/BaseTable';

export default {
  components: { BaseTable },
  data() {
    return {
      columns: [
        { type: 'selection' },
        { prop: 'name', label: '报告名称' },
        { prop: 'id', label: '任务ID' },
        { prop: 'cycle', label: '报告周期' },
        { prop: 'process', label: '生产进度' },
        { prop: 'status', label: '状态' },
        {
          prop: 'updated_at',
          label: '更新时间',
          render(h, {row}) {
            // TODO: delete console
            console.log(row)
            return <el-button type="primary" size="mini" >男</el-button>;
          },
        },
        { prop: 'operation', label: '操作', slotName: 'operation' },
      ],
      test: '',
      tableData: [
        {
          name: 'name',
          id: 'id',
          cycle: 'cycle',
          process: 'process',
          status: 'status',
          updated_at: 'updated_at',
        },
      ],
    };
  },
};
</script>
