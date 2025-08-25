# NyxPlayer

[![Netlify Status](https://api.netlify.com/api/v1/badges/4e2759ea-b698-4dc2-81b4-3c88d8fd997b/deploy-status)](https://app.netlify.com/sites/unique-gnome-214f06/deploys)

一个简洁美观的 Vue 3 音乐播放器

🎯 原生 MPA 支持

- 原生支持多页面应用(MPA)架构，无需 Pjax/SPA 即可实现跨页面播放状态保持

⚡ 零配置快速集成

- 支持 CDN 直连与模块化导入，通过简洁 API 即可实现开箱即用的播放体验

🎨 深度样式定制

- 基于 CSS Variables 的主题系统

📦 多格式交付支持

- 提供 UMD/ES Module 双模式构建，兼容传统脚本与现代工程化项目

以及实现中的特性：

- 🎶 自定义音频源和歌词源
- ✏️ 更广泛的主题设置
- 🚛 开箱即用的主题和博客系统兼容
- 🧪 还有其他功能...

## 使用

### 通过 npm 引入

```shell
pnpm add nyx-player
```

示例方法：

```typescript
import 'nyx-player/style'

urls = [
  { name: '列表1', url: 'https://music.163.com/#/playlist?id=2943811283' }
]
const { initPlayer } = await import('nyx-player')
initPlayer('#player', '#showBtn', urls, '#playBtn', 'html[data-theme=&quot;dark&quot;]', 'nyx')
```

或者引入Vue组件：

```vue
<script setup lang='ts'>
import NyxPlayer from 'nyx-player/component'

const url = [
  { url: 'https://music.163.com/#/playlist?id=2943811283', name: '1' },
]
</script>

<template>
  <NyxPlayer :urls="url" show-btn="#test" play-btn="#play" dark-mode-target="html[data-theme=&quot;dark&quot;]" />
</template>
```

配置同`initPlayer`函数

### 通过 CDN 引入

引入ESM包：

```html
<script type="module">
  import { initPlayer } from 'https://esm.sh/nyx-player'

  const url = [{ url: 'https://music.163.com/#/playlist?id=2943811283', name: '1' }]

  initPlayer('#player', '#showBtn', urls, '#playBtn', 'html[data-theme=&quot;dark&quot;]', 'nyx')
</script>
```

或者UMD包：

```html
<script src="https://unpkg.com/nyx-player@0.0.2/dist/nyx-player.umd.cjs"></script>

<script>
  const url = [{ url: 'https://music.163.com/#/playlist?id=2943811283', name: '1' }]
  NyxPlayer.initPlayer('#player', '#showBtn', urls, '#playBtn', 'html[data-theme=&quot;dark&quot;]', 'nyx')
</script>
```

### 参数文档

- `el`: 播放器挂载到的节点的CSS选择器，挂载节点建议为空节点
- `showBtn`: 用于控制播放器是否显示的按钮CSS选择器
- `urls`: 播放的音频列表，每个元素包含如下两个值
  - `name`: 列表名
  - `url`: 网易云或QQ音乐的歌单，直接填写歌单网页URL值即可
- `playBtn`(可选): 控制播放器暂停播放的按钮CSS选择器
- `darkModeTarget`(可选): 控制播放器黑暗模式的CSS选择器，当选择器存在时播放时使用黑暗模式
  - 如你的网页在黑暗模式下，是为html元素添加data-theme="dark"属性，那么此处应该填写：`html[data-theme=&quot;dark&quot;]`
  - 填写`auto`时自动根据系统偏好判断
- `preset`: 播放器颜色预设，支持`nyx`和`shokax`两种预设
- `style`: 播放器颜色样式，见`presets.ts`

## 项目名称由来

是的，就是院神的霓克斯
