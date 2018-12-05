---
title: icon
pageClass: custom-page-class
---
# icon
<ClientOnly>
<Common-code-format 
  title="使用方法" 
  extendedDescription="说明：使用本组件需要全局引入* svg.js*文件或是在引用本组件的父组件中引入* svg.js*文件。例如:* import './packages/common/svg.js'*。* svg.js*文件是根据* http://www.iconfont.cn*的* symbol引用*生成的* js*文件。具体获取方法请访问* http://www.iconfont.cn*。使用本组件为项目添加Icon图标需要在* Iconfont*的对应项目将每一个图标按以下规范为每一个图标命名：* vi-xxx*，必须以* vi-开头，xxx可以自己命名。*"
  description="直接通过设置属性* vi-icon-name*来指定想使用的图标，其属性值就是上文提到的* xxx*。例如：" 
>
  <Icon-vi-icon/>
  <highlight-code slot="codeText" lang="vue">
    <vi-icon vi-icon-name="fold" vi-icon-size="medium"></vi-icon>
    <vi-icon vi-icon-name="unfold" vi-icon-size="medium"></vi-icon>
    <vi-icon vi-icon-name="left" vi-icon-size="medium"></vi-icon>
    <vi-icon vi-icon-name="right" vi-icon-size="medium"></vi-icon>
    <vi-icon vi-icon-name="download" vi-icon-size="medium"></vi-icon>
    <vi-icon vi-icon-name="upload" vi-icon-size="medium"></vi-icon>
    <vi-icon vi-icon-name="loading" vi-icon-size="medium"></vi-icon>
    <vi-icon vi-icon-name="search" vi-icon-size="medium"></vi-icon>
    <vi-icon vi-icon-name="top" vi-icon-size="medium"></vi-icon>
    <vi-icon vi-icon-name="setting" vi-icon-size="medium"></vi-icon>
  </highlight-code>
  <section slot="paraDescription">使用<span class="paraStyle">vi-icon-name</span></section>
</Common-code-format>
</ClientOnly>
