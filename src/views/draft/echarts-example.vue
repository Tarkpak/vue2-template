<template>
  <div class="container">
    <div id="mycharts" ref="charts">{{ hello }}</div>
    <div id="mapChart" ref="mapChart">China</div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import gz from '@/utils/gz.js';

export default {
  data() {
    return {
      hello: 'hello',
    };
  },
  mounted() {
    // this.initCharts();
    this.initMapChart();
  },
  methods: {
    initCharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.charts);
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例',
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
    initMapChart() {
      echarts.registerMap('贵州', gz);
      const mapChart = echarts.init(this.$refs.mapChart);
      mapChart.setOption({
        title: {
          text: '地图',
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          left: 'right',
          top: 'center',
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        series: [
          {
            name: '地图',
            type: 'map',
            mapType: '贵州',
            label: {
              show: true,
            },
            zoom: 1, //当前视角的缩放比例
            roam: true, //是否开启平游或缩放
            scaleLimit: {
              //滚轮缩放的极限控制
              min: 1,
              max: 2, //可以放大几倍
            },
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: center;
  #mycharts {
    width: 400px;
    height: 300px;
  }
  #mapChart {
    width: 700px;
    height: 450px;
  }
}
</style>