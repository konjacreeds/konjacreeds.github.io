<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue'
import { useDarkMode } from '../composables/useDarkMode'

defineProps<{
  content: string
}>()
const codeblock = ref<HTMLElement | null>(null)
const copied = ref(false)

async function copyCode() {
  if (!codeblock.value)
    return

  const code = codeblock.value.textContent ?? ''

  try {
    await navigator.clipboard.writeText(code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 3000)
  }
  catch (err) {
    copied.value = false
    throw new Error(`Failed to copy code: ${err}`)
  }
}

const shadowHost = useTemplateRef('shadowHost')

// 提取出 @font-face 并插入 document.head
function insertGlobalFontFace(cssCode: string) {
  const fontFaceMatch = cssCode.match(/@font-face\s*\{[^}]+\}/g)
  if (fontFaceMatch) {
    const globalStyle = document.createElement('style')
    globalStyle.textContent = fontFaceMatch.join('\n')
    document.head.appendChild(globalStyle)
  }

  // 返回去掉 font-face 的局部样式
  return cssCode.replace(/@font-face\s*\{[^}]+\}/g, '')
}

// 插入其余 CSS 到 ShadowRoot
onMounted(() => {
  const shadowRoot = shadowHost.value?.getRootNode?.()
  // @ts-expect-error temp
  if (window.__cssCode__ && shadowRoot) {
    const style = document.createElement('style')
    // @ts-expect-error temp
    const localCss = insertGlobalFontFace(window.__cssCode__)
    style.textContent = localCss
    shadowRoot.appendChild(style)
  }
})

const { isDark } = useDarkMode()
</script>

<template>
  <div ref="shadowHost" class="codeblock text-4" :class="{ dark: isDark }">
    <div class="header min-h-6 pb-2">
      <div class="float-left flex flex-row gap-2.5">
        <div class="ml-3.25 mt-2.25 h-3.75 w-3.75 rounded-50% bg-[rgb(252,_98,_93)]" />
        <div class="mt-2.25 h-3.75 w-3.75 rounded-50% bg-[rgb(253,_188,_64)]" />
        <div class="mt-2.25 h-3.75 w-3.75 rounded-50% bg-[rgb(53,_205,_75)]" />
      </div>
      <div class="float-right flex flex-row pr-6 pt-2">
        <button
          class="cursor-pointer"
          :class="{ 'i-ri-file-copy-fill': !copied, 'i-ri-check-fill': copied }"
          @click="copyCode"
        />
      </div>
    </div>

    <div ref="codeblock" v-html="content" />
  </div>
</template>

<style lang="css" scoped>
@font-face {
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('../assets/fonts/JetBrainsMono-Regular.woff2') format('woff2');
}

.header {
  background-color: var(--grey-2);
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
}

.codeblock {
  box-shadow: 0.5rem 0.5rem 1rem var(--grey-3);
}

:deep(*) {
  font-family: 'JetBrains Mono', 'Courier New', Courier, monospace;
  font-size: 1rem;
  line-height: 1.5rem;
  line-break: anywhere;
  white-space: break-spaces;
}

:deep(pre) {
  margin: 0;
  padding: 0.75rem;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}

:deep(.line) {
  text-indent: -2.5rem;
  padding-left: 2.5rem;
}

:deep(code) {
  counter-reset: step;
  counter-increment: step 0;
  display: flex;
  flex-direction: column;
}

:deep(code .line::before) {
  content: counter(step);
  counter-increment: step;
  width: 1rem;
  margin-right: 1.5rem;
  display: inline-block;
  text-align: right;
  color: rgba(115, 138, 148, 0.4);
}

:deep(.diff .remove) {
  background-color: var(--color-red);
  opacity: 0.7;
}

:deep(.diff .remove)::before {
  content: '-';
  color: var(--color-red);
  font-weight: bold;
}

:deep(.diff .add) {
  background-color: var(--color-green);
}

:deep(.diff .add)::before {
  content: '+';
  color: var(--color-green);
  font-weight: bold;
}

:deep(.diff .highlighted) {
  background-color: var(--grey-4);
}

.dark {
  box-shadow: none;
}

html[data-theme='dark'] .codeblock {
  box-shadow: none;
}
</style>

<style lang="css">
html[data-theme='dark'] .shiki,
html[data-theme='dark'] .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
  text-decoration: var(--shiki-dark-text-decoration) !important;
}

.dark .shiki,
.dark .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
  text-decoration: var(--shiki-dark-text-decoration) !important;
}
</style>
