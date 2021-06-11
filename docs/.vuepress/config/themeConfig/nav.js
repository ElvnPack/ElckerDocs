// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '社区文档', link: '/pages/95c0f7/', items: [
      {
        text: '简介', link: '/pages/ed0288/',
      },
      {
        text: '前端文档', link: '/pages/ed0288/',
      },
      {
        text: '平台文档', items: [
          {
            text: '平台简介', link: '/pages/f7198d/',
          },
        ]
      },
    ]
  },
  {
    text: '平台应用', items: [
      {
        text: 'SPA版本演示', link: ''
      },
      {
        text: '多页面版本演示', link: ''
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
