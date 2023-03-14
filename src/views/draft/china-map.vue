<template>
  <div id="chart" class="map"></div>
</template>

<script>
import * as echarts from 'echarts';
import geoJson from '@/assets/map/china-new.json'

const data = [
  {
    name: '310000',
    value: 9000,
  },
  {
    name: '500000',
    value: 8000,
  },
  {
    name: '520000',
    value: 600,
  },
];

export default {
  mounted() {
    console.log('geoJSON:', geoJson)
    this.init();
  },
  methods: {
    async init() {
      echarts.registerMap('china', geoJson);
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
            roam: true,
            nameProperty: 'id',
            label: {
              // show: true,
            },
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