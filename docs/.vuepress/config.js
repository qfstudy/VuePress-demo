module.exports = {
  title: 'VuePress',
  description: 'VuePress',
  themeConfig: {
    nav: [{
      text: '指南',
      link: '/guide/install/install'
    }],
    sidebar: [{
        title: '开发指南',
        collapsable: false
      },
      ['./guide/install/install', '安装'],
      ['./guide/started/started', '快速上手'],
      {
        title: '组件',
        collapsable: false
      },
      ['./guide/icon/icon', 'icon'],
    ],
  }
}