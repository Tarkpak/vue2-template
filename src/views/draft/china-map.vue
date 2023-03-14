<template>
  <div id="chart" class="map"></div>
</template>

<script>
import * as echarts from 'echarts';
const data = [
  {
    name: '上海',
    value: 9000,
  },
  {
    name: '江苏',
    value: 8000,
  },
  {
    name: '青海',
    value: 600,
  },
];

export default {
  methods: {
    async init() {
      const url = '@/assets/map/china-new.json';
      const res = await fetch(url);
      chinaGeoJson = await res.json();
      console.log('chinaGeoJson:', chinaGeoJson);

      echarts.registerMap('china', chinaGeoJson);
      const myChart = echarts.init(document.getElementById('chart'));

      myChart.setOption({
        tooltip: {
          trigger: 'item',
        },
        visualMap: {
          type: 'piecewise',
          max: 10000,
          min: 0,
          text: ['高', '低'],
          calculable: true,
        },
        series: [
          {
            name: '测试指标',
            type: 'map',
            map: 'china',
            data,
          },
        ],
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>