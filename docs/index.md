---
home: true
heroImage: /elcker/img/logo.png
# heroText: Elcker
tagline: 让开发变得简单高效，多点时间享受生活，感谢曾经为梦想奋斗的自己！
actionText: 快速开始 →
actionLink: /pages/ce111f/
bannerBg: auto # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

features: # 可选的
  - title: 前端
    details: 采用VITE2.0+VUE3.0+TS进行前端开发框架的封装，支持SPA及对页面，让前端开发变得高效简洁。
    link: /pages/666c99/ # 可选
    # imgUrl: /img/web.png # 可选
  - title: 后端
    details: 采用模块化的开发技术，对单点技术进行封装优化，插拔式引入使微服务的开发简洁明了。
    link: /pages/f7198d/
    # imgUrl: /img/ui.png
  - title: 云生态
    details: 提供与各大公有云，私有云的集成方式，中间件的部署文档，监控应用状态。
    link: /pages/65bbde/
    # imgUrl: /img/other.png

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
postList: none
# simplePostListLength: 10 # 简约版文章列表显示的文章数量，默认10。（仅在postList设置为simple时生效）
---

### 🐼Me

> CSDN 博客：[Elcker's Blog](https://blog.csdn.net/sxlesq)

## :email: 联系

- **WeChat or QQ**: <a :href="qqUrl" class='qq'>438586732</a>
- **Email**:  <a href="mailto:894072666@qq.com">438586732@qq.com</a>
- **GitHub**: <https://github.com/ElvnPack>
- **gitee**: <https://gitee.com/Elcker>
- **Elcker文档**：<https://elcker-docs.vercel.app/>
- **Elcker钉钉交流群**：31975012

<script>
  export default {
    data(){
      return {
        qqUrl: 'tencent://message/?uin=438586732&Site=&Menu=yes'
      }
    },
    mounted(){
      const flag =  navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      if(flag){
        this.qqUrl = 'mqqwpa://im/chat?chat_type=wpa&uin=438586732&version=1&src_type=web&web_src=oicqzone.com'
      }
    }
  }
</script>

<!-- 小熊猫 
<img src="/img/panda-waving.png" class="panda no-zoom" style="width: 130px;height: 115px;opacity: 0.8;margin-bottom: -4px;padding-bottom:0;position: fixed;bottom: 0;left: 0.5rem;z-index: 1;">
-->


<!--

## 关于

### 📚Blog
这是一个兼具博客文章、知识管理、文档查找的个人网站，主要内容是Web前端技术。如果你喜欢这个博客&主题欢迎到[GitHub](https://github.com/xugaoyi/vuepress-theme-vdoing)点个Star、获取源码，或者交换[友链](/friends/) ( •̀ ω •́ )✧

### 🎨Theme
本站主题是根据[VuePress](https://vuepress.vuejs.org/zh/)的默认主题修改而成。取名`Vdoing`(维度)，旨在轻松打造一个`结构化`与`碎片化`并存的个人在线知识库&博客，让你的知识海洋像一本本书一样清晰易读。配合多维索引，让每一个知识点都可以快速定位！ 更多[详情](https://github.com/xugaoyi/vuepress-theme-vdoing)。

<a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/stars/xugaoyi/vuepress-theme-vdoing' alt='GitHub stars' class="no-zoom"></a>
<a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank"><img src='https://img.shields.io/github/forks/xugaoyi/vuepress-theme-vdoing' alt='GitHub forks' class="no-zoom"></a>

</br>


## 特色功能
博客部分特色功能介绍

#### 一站式技术搜索

   博客内容中包含部分技术教程，可以利用搜索框快速搜索到相关文档，即使博客中没有的，你还可以选择最下方的 `在XXX中搜索“xxx”` 快速到达你想要找的内容。

#### 深色模式与阅读模式
关爱程序员，保护视力，点击右下角的主题模式按钮试试吧~

#### Demo演示模块
   为了更直观的展示一些代码的效果，博客添加了demo模块插件，可查看demo、源码，以及跳转到codepen在线编辑。**示例**：

::: demo [vanilla]
```html
<html>
  <div id="vanilla-box"></div>
</html>
<script>
  var box = document.getElementById('vanilla-box')
  box.innerHTML = 'Hello World! Welcome to EB'
</script>
<style>
#vanilla-box {
  color: #11a8cd;
}
</style>
```
:::


## :email: 联系

- **WeChat or QQ**: <a href="tencent://message/?uin=894072666&Site=&Menu=yesUrl" class='qq'>894072666</a>
- **Email**: <a href="mailto:894072666@qq.com">894072666@qq.com</a>
- **GitHub**: <https://github.com/xugaoyi>

</br>  -->
