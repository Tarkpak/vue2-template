export const data = [
  {
    shape: 'custom-rect',
    icon: 'qax-icon-Play',
    label: '开始',
    type: 'bar',
    attrs: {
      body: {
        rx: 20,
        ry: 26,
      },
    },
  },
  {
    label: '过程',
    icon: 'qax-icon-Step',
    //创建节点会优先选用metadata定义的数据生成节点
    metadata: {
      label: '过程11',
      shape: 'custom-rect',
      data: {
        name: '张三',
        age: 18,
      },
      test: 'only test',
    },
  },
  {
    shape: 'custom-rect',
    icon: 'qax-icon-Non-secure-domain',
    attrs: {
      body: {
        rx: 6,
        ry: 6,
      },
    },
    label: '可选过程',
  },
  {
    shape: 'custom-polygon',
    icon: 'qax-icon-Conf-reset',
    attrs: {
      body: {
        refPoints: '0,10 10,0 20,10 10,20',
      },
    },
    label: '决策',
  },
  {
    shape: 'custom-polygon',
    icon: 'qax-icon-Database',
    attrs: {
      body: {
        refPoints: '10,0 40,0 30,20 0,20',
      },
    },
    label: '数据',
  },
  {
    shape: 'custom-circle',
    icon: 'qax-icon-Link-check',
    label: '连接',
  },
]

export const ports = {
  groups: {
    top: {
      position: 'top',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    right: {
      position: 'right',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    bottom: {
      position: 'bottom',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
    left: {
      position: 'left',
      attrs: {
        circle: {
          r: 4,
          magnet: true,
          stroke: '#5F95FF',
          strokeWidth: 1,
          fill: '#fff',
          style: {
            visibility: 'hidden',
          },
        },
      },
    },
  },
  items: [
    {
      group: 'top',
    },
    {
      group: 'right',
    },
    {
      group: 'bottom',
    },
    {
      group: 'left',
    },
  ],
};
export const nodes = {
  'custom-rect': {
    inherit: 'rect',
    width: 66,
    height: 36,
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: '#5F95FF',
        fill: '#EFF4FF',
      },
      text: {
        fontSize: 12,
        fill: '#262626',
      },
    },
    ports: { ...ports },
  },
  'custom-polygon': {
    inherit: 'polygon',
    width: 66,
    height: 36,
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: '#5F95FF',
        fill: '#EFF4FF',
      },
      text: {
        fontSize: 12,
        fill: '#262626',
      },
    },
    ports: { ...ports },
  },
  'custom-circle': {
    inherit: 'circle',
    width: 45,
    height: 45,
    attrs: {
      body: {
        strokeWidth: 1,
        stroke: '#5F95FF',
        fill: '#EFF4FF',
      },
      text: {
        fontSize: 12,
        fill: '#262626',
      },
    },
    ports: { ...ports },
  },
  'custom-image': {
    inherit: 'rect',
    width: 52,
    height: 52,
    markup: [
      {
        tagName: 'rect',
        selector: 'body',
      },
      {
        tagName: 'image',
      },
      {
        tagName: 'text',
        selector: 'label',
      },
    ],
    attrs: {
      body: {
        stroke: '#5F95FF',
        fill: '#5F95FF',
      },
      image: {
        width: 26,
        height: 26,
        refX: 13,
        refY: 16,
      },
      label: {
        refX: 3,
        refY: 2,
        textAnchor: 'left',
        textVerticalAnchor: 'top',
        fontSize: 12,
        fill: '#fff',
      },
    },
    ports: { ...ports },
  },
}
export const edges = {
  'test-edge': {
    inherit: 'edge',
    attrs: {
      line: {
        stroke: '#A2B1C3',
        strokeWidth: 2,
      },
    },
  },
}
export const guide = {
  'bar': {
    panel: {
      right: () => <h1>123123</h1>
    }
  }
}
export const graphic = {
  defaultEdgeShape: 'test-edge',
  hoverShowPort: true
}
