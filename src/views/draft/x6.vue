<template>
  <div class="container">
    <div id="stencil"></div>
    <div id="tuopu"></div>
    <div>
      <button @click="autoLayout">auto layout</button>
      <button @click="addNode">add node</button>
      <button @click="addEdge">add edge</button>
    </div>
  </div>
</template>

<script>
import { Graph, Shape, Addon } from '@antv/x6';
import { ForceLayout, Force2Layout, GForceLayout } from '@antv/layout';
import '@antv/x6-vue-shape';
import { nodes, ports } from '@/config/diagrams';

let graph = null;

export default {
  data() {
    return {};
  },
  mounted() {
    graph = new Graph({
      container: document.getElementById('tuopu'),
      width: 1000,
      height: 600,
      grid: true,
      panning: {
        enabled: true,
      },
      mousewheel: {
        enabled: true,
        zoomAtMousePosition: true,
        modifiers: 'ctrl',
        minScale: 0.5,
        maxScale: 3,
      },
      selecting: true,
      snapline: true,
      keyboard: true,
      clipboard: true,
    });
    for (const nodeName in nodes) {
      if (Object.hasOwnProperty.call(nodes, nodeName)) {
        const node = nodes[nodeName];
        Graph.registerNode(nodeName, node);
      }
    }

    // 控制连接桩显示/隐藏
    const showPorts = (ports, show) => {
      for (let i = 0, len = ports.length; i < len; i = i + 1) {
        ports[i].style.visibility = show ? 'visible' : 'hidden';
      }
    };
    graph.on('node:mouseenter', () => {
      const container = document.getElementById('tuopu');
      const ports = container.querySelectorAll('.x6-port-body');
      showPorts(ports, true);
    });
    graph.on('node:mouseleave', () => {
      const container = document.getElementById('tuopu');
      const ports = container.querySelectorAll('.x6-port-body');
      showPorts(ports, false);
    });
    // #endregion

    // #region 初始化 stencil
    const stencil = new Addon.Stencil({
      title: '流程图',
      target: graph,
      stencilGraphWidth: 200,
      stencilGraphHeight: 180,
      collapsable: false,
      groups: [
        {
          title: '基础流程图',
          name: 'group1',
        },
        {
          title: '系统设计图',
          name: 'group2',
          graphHeight: 250,
          layoutOptions: {
            rowHeight: 70,
          },
        },
      ],
      layoutOptions: {
        columns: 2,
        columnWidth: 80,
        rowHeight: 55,
      },
    });
    document.getElementById('stencil').appendChild(stencil.container);
    const r1 = graph.createNode({
      shape: 'custom-rect',
      label: '开始',
      attrs: {
        body: {
          rx: 20,
          ry: 26,
        },
      },
    });
    const r2 = graph.createNode({
      shape: 'custom-rect',
      label: '过程',
    });
    const r3 = graph.createNode({
      shape: 'custom-rect',
      attrs: {
        body: {
          rx: 6,
          ry: 6,
        },
      },
      label: '可选过程',
    });
    const r4 = graph.createNode({
      shape: 'custom-polygon',
      attrs: {
        body: {
          refPoints: '0,10 10,0 20,10 10,20',
        },
      },
      label: '决策',
    });
    const r5 = graph.createNode({
      shape: 'custom-polygon',
      attrs: {
        body: {
          refPoints: '10,0 40,0 30,20 0,20',
        },
      },
      label: '数据',
    });
    const r6 = graph.createNode({
      shape: 'custom-circle',
      label: '连接',
    });
    stencil.load([r1, r2, r3, r4, r5, r6], 'group1');
    const imageShapes = [
      {
        label: 'Client',
        image:
          'https://gw.alipayobjects.com/zos/bmw-prod/687b6cb9-4b97-42a6-96d0-34b3099133ac.svg',
      },
      {
        label: 'Http',
        image:
          'https://gw.alipayobjects.com/zos/bmw-prod/dc1ced06-417d-466f-927b-b4a4d3265791.svg',
      },
      {
        label: 'Api',
        image:
          'https://gw.alipayobjects.com/zos/bmw-prod/c55d7ae1-8d20-4585-bd8f-ca23653a4489.svg',
      },
      {
        label: 'Sql',
        image:
          'https://gw.alipayobjects.com/zos/bmw-prod/6eb71764-18ed-4149-b868-53ad1542c405.svg',
      },
      {
        label: 'Clound',
        image:
          'https://gw.alipayobjects.com/zos/bmw-prod/c36fe7cb-dc24-4854-aeb5-88d8dc36d52e.svg',
      },
      {
        label: 'Mq',
        image:
          'https://gw.alipayobjects.com/zos/bmw-prod/2010ac9f-40e7-49d4-8c4a-4fcf2f83033b.svg',
      },
    ];
    const imageNodes = imageShapes.map((item) =>
      graph.createNode({
        shape: 'custom-image',
        label: item.label,
        attrs: {
          image: {
            'xlink:href': item.image,
          },
        },
      }),
    );
    stencil.load(imageNodes, 'group2');
  },
  methods: {
    autoLayout() {
      const models = [
        { id: '攻击引擎' },
        { id: '区域1', target: ['攻击引擎', '安全设备1', '标靶1', '标靶2'], isTrunk: true },
        { id: '安全设备1' },
        { id: '标靶1' },
        { id: '标靶2' },
        { id: '区域2', target: ['攻击引擎', '安全设备2', '标靶3', '标靶4', '标靶5'], isTrunk: true },
        { id: '安全设备2' },
        { id: '标靶3' },
        { id: '标靶4' },
        { id: '标靶5' },
      ].reduce(
        (total, node) => {
          total.nodes.push({
            id: String(node.id),
            shape: 'circle',
            width: 50,
            height: 50,
            attrs: {
              body: {
                fill: 'pink',
              },
              label: {
                text: node.id,
                fill: 'black',
              },
            },
            // tools: [
            //   { name: 'boundary' },
            //   {
            //     name: 'button-remove', // 工具名称
            //     args: { x: 10, y: 10 }, // 工具对应的参数
            //   },
            // ],
            ports: { ...ports },
          });

          if (node.target) {
            node.target.forEach((edgeId) => {
              total.edges.push({
                shape: 'edge',
                source: node.id,
                target: edgeId,
              });
            });
          }

          return total;
        },
        { nodes: [], edges: [] },
      );

      // console.log('models:', models);

      


      const layout = new ForceLayout({
        type: 'force',
        center: [500, 300], // 可选，默认为图的中心
        // linkDistance: 50, // 可选，边长
        // nodeStrength: 30, // 可选
        // edgeStrength: 0.1, // 可选
        nodeSize: 70, // 可选
        // workerEnabled: true,
        preventOverlap: true,
        linkDistance: (d) => {
          if (d.source === '攻击引擎') {
            console.log('111:', 111)
            return 100;
          }
          return 30;
        },
        nodeStrength: (d) => {
          if (d.isTrunk) {
            return -10;
          }
          return -50;
        },
        edgeStrength: (d) => {
          if (
            d.source === '区域1' ||
            d.source === '区域2'
          ) {
            console.log('222:', 222)
            return 1;
          }
          return 0.1;
        },
        tick: () => {
          graph.fromJSON(models);
        },
      });
      layout.layout(models);
      // const { nodes, edges } = layout;
      // nodes.forEach((node) => graph.addNode(node));
      // edges.forEach((edge) => graph.addEdge(edge));
      // console.log('newModel:', newModel)
      // graph.fromJSON(newModel);
    },
    addNode() {
      [1, 2, 3, 4, 5].forEach((idx) => {
        graph.addNode({
          id: String(idx),
          inherit: 'circle',
          x: 200,
          y: 70 * idx,
          width: 50,
          height: 50,
          attrs: {
            body: {
              fill: 'pink',
            },
            label: {
              text: 'pink',
              fill: 'black',
            },
          },
          tools: [
            { name: 'boundary' },
            {
              name: 'button-remove', // 工具名称
              args: { x: 10, y: 10 }, // 工具对应的参数
            },
          ],
          ports: { ...ports },
        });
      });
    },
    addEdge() {
      [1, 2, 3, 4, 5].forEach((idx) => {
        if (idx < 5) {
          graph.addEdge({
            shape: 'edge',
            source: idx,
            target: idx + 1,
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
#tuopu {
  // width: calc(100% - 180px);
  // height: 100%;
  flex: 1;
}
#stencil {
  width: 180px;
  // height: 100%;
  position: relative;
  // border-right: 1px solid #dfe3e8;
}
</style>