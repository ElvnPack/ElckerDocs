// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '社区文档', link: '/pages/95c0f7/', items: [
      {
        text: '指引', link: '/pages/ce111f/',
      },
      {
        text: '前端项目', items:[
          {
            text: 'EAdmin-基于vite2.0构建', link: '/pages/27942a/',
          },
          {
            text: 'EInter-基于webpack构建', link: '/pages/640434/',
          },
        ],
      },
      {
        text: '服务组件', items: [
          {
            text: 'EWPC', link: '/pages/f7198d/',
          },
        ]
      },
    ]
  },
  {
    text: '平台应用', items: [
      {
        text: 'EAdmin项目演示', link: 'https://eadmin.vercel.app/'
      },
      {
        text: 'EInter项目演示', link: ''
      },
      {
        text: "开源项目", items: [
          {
            text: 'elcker-inter-spa-template', link: 'https://gitee.com/elckerinter/elcker-inter-spa-template.git'
          },
          {
            text: 'elcker-inter-spa', link: 'https://gitee.com/elckerinter/elcker-inter-spa.git'
          },
          {
            text: 'elcker-inter-pages-template', link: 'https://gitee.com/elckerinter/elcker-inter-pages-template.git'
          },
        ]
      }
    ]
  },
  {
    text: 'Elcker分类',
    link: '/archives/',
    items: [
      { text: '文档分类', link: '/categories/' },
      { text: '文档标签', link: '/tags/' },
      { text: '文档归档', link: '/archives/' },
    ],
  },
  { text: '更新日志', link: '/pages/e92bd4/' },
  { text: '关于我们', link: '/pages/babcad/' },
]
