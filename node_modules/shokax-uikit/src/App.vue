<script setup lang="ts">
import type { NavItemType } from './components/navbar/NavTypes'
import { provide } from 'vue'
import CodeBlock from './components/CodeBlock.vue'
import DividerLine from './components/DividerLine.vue'
import NavBar from './components/navbar/NavBar.vue'
import PagefindSearch from './components/search/SearchPage.vue'
import ToolBar from './components/toolbar/ToolBar.vue'
import Waves from './components/waves/Waves.vue'

const navlinks: NavItemType[] = [
  {
    href: '/',
    text: 'Home',
    icon: 'i-ri-home-line',
  },
  {
    href: '/about',
    text: 'About',
    icon: 'i-ri-user-6-line',
  },
  {
    href: '/contact',
    text: 'Contact',
    icon: 'i-ri-mail-line',
  },
  {
    dropbox: true,
    text: 'Account',
    icon: 'i-ri-account-circle-line',
    dropboxItems: [
      {
        href: '/login',
        text: 'Login',
        icon: 'i-ri-login-circle-line',
      },
      {
        href: '/register',
        text: 'Register',
        icon: 'i-ri-survey-line',
      },
    ],
  },
]

provide('linkElName', 'a')

const codes = `<pre class="shiki shiki-themes vitesse-light vitesse-dark" style="background-color:#ffffff;--shiki-dark-bg:#121212;color:#393a34;--shiki-dark:#dbd7caee" tabindex="0"><code class="language-shell">
  <span class="line"><span style="color:#59873A;--shiki-dark:#80A665">apt</span><span style="color:#B56959;--shiki-dark:#C98A7D"> install</span><span style="color:#B56959;--shiki-dark:#C98A7D"> build-essential</span><span style="color:#B56959;--shiki-dark:#C98A7D"> ca-certificates</span><span style="color:#B56959;--shiki-dark:#C98A7D"> zlib1g-dev</span><span style="color:#B56959;--shiki-dark:#C98A7D"> libpcre3</span><span style="color:#B56959;--shiki-dark:#C98A7D"> libpcre3-dev</span><span style="color:#B56959;--shiki-dark:#C98A7D"> tar</span><span style="color:#B56959;--shiki-dark:#C98A7D"> unzip</span><span style="color:#B56959;--shiki-dark:#C98A7D"> libssl-dev</span><span style="color:#B56959;--shiki-dark:#C98A7D"> wget</span><span style="color:#B56959;--shiki-dark:#C98A7D"> curl</span><span style="color:#B56959;--shiki-dark:#C98A7D"> git</span><span style="color:#B56959;--shiki-dark:#C98A7D"> cmake</span><span style="color:#B56959;--shiki-dark:#C98A7D"> ninja-build</span><span style="color:#B56959;--shiki-dark:#C98A7D"> golang</span></span>
  <span class="line"><span style="color:#A0ADA0;--shiki-dark:#758575DD"># 需要启用源代码软件源(deb-src)</span></span>
  <span class="line"><span style="color:#59873A;--shiki-dark:#80A665">apt-get</span><span style="color:#B56959;--shiki-dark:#C98A7D"> build-dep</span><span style="color:#B56959;--shiki-dark:#C98A7D"> nginx</span></span></code></pre>`
</script>

<template>
  <!-- <Brand :is-home="true" art-board-content="111" headline-content="222" /> -->
  <NavBar :nav-links="navlinks" name="website" :click-toggle-callback="() => void 0" @click-search="() => void 0" />
  <PagefindSearch selector="#search" />
  <ToolBar :show-contents-click-callback="() => void 0" />
  <Waves />

  <DividerLine content="111" />
  <CodeBlock :content="codes" />
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis libero non justo auctor, quis convallis ipsum varius. Curabitur porttitor tempor risus sed maximus. Ut sit amet pharetra eros, vel euismod quam. Integer luctus, justo eget luctus facilisis, purus nisl scelerisque odio, sit amet accumsan felis dui in neque. Etiam at neque nunc. Phasellus elementum nulla eget mauris sodales laoreet. Nullam ligula leo, elementum id pulvinar id, posuere ac libero. Sed posuere ligula sed laoreet ultrices. Praesent dictum dapibus eros, sed pretium lectus tincidunt nec. Vivamus molestie quis massa non aliquam. Phasellus auctor auctor enim, non ullamcorper ipsum. In lacinia nibh ut lectus efficitur, non egestas felis vestibulum.

    Sed interdum ligula in quam semper molestie. Pellentesque fringilla non enim et pellentesque. Nulla ac malesuada ligula. Mauris eu dapibus enim, non varius dui. Pellentesque id justo ut nisi interdum sodales id at neque. Proin pellentesque est nunc, in mattis lectus mattis maximus. Sed mollis sapien mollis massa ultrices, quis vulputate ante congue. Suspendisse id lorem a orci vehicula scelerisque sit amet ut justo.

    In ut cursus elit. Aenean et auctor neque. Suspendisse cursus a ipsum a egestas. Ut eu ornare sem. Vivamus bibendum purus eu nunc viverra fermentum. Nulla eros lectus, pulvinar et tellus sed, scelerisque ultricies est. Praesent feugiat aliquam diam, in iaculis tellus. Duis est ante, tristique vitae auctor ultrices, pellentesque eu dolor. Integer in malesuada sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur eget libero facilisis, rutrum risus id, rhoncus turpis.

    Aenean auctor justo ipsum, vel tincidunt sem tempor ac. Quisque dignissim nisi at nisl dictum tincidunt. Morbi risus nisl, tempus non volutpat a, auctor eget tortor. Aliquam erat volutpat. Donec sodales pulvinar ornare. Praesent at posuere augue, ut viverra mauris. Donec rhoncus vel turpis non efficitur. Integer non lorem dui. Phasellus id velit congue augue blandit pellentesque. Nulla quam libero, ultrices a nulla id, pellentesque bibendum nibh. Phasellus sapien magna, bibendum vitae tortor vitae, vestibulum luctus ligula. Nulla interdum dignissim finibus. Donec turpis purus, venenatis sit amet leo a, lacinia sollicitudin dolor. Vivamus est ante, euismod a metus a, commodo efficitur tortor.

    Aliquam erat volutpat. Aliquam erat volutpat. Praesent sed velit eu ipsum tempor vestibulum dignissim vitae eros. Proin interdum urna orci, et feugiat quam pharetra a. Morbi quis faucibus neque. Nam pharetra luctus lectus non feugiat. Vivamus tellus orci, dignissim vitae consectetur eu, interdum sed sapien. Integer malesuada purus vel pretium fermentum. Nulla facilisi. Morbi fermentum arcu erat. Aliquam egestas consequat elementum. In vel leo ullamcorper, semper felis in, commodo massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi ut convallis ligula, et malesuada nibh. Aenean commodo neque sit amet posuere vestibulum. Suspendisse tincidunt libero ac tortor molestie, volutpat cursus arcu elementum.
  </p>
  <div id="comment">
    111
  </div>
  <div id="toc" />
</template>

<style>
@import url('./styles/style.css');
@import url('./styles/palette.css');
</style>
