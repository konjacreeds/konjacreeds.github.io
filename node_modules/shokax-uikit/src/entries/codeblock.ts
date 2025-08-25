import { CodeBlockElement } from './CodeBlock.ce'

import 'virtual:uno.css'

function replaceTargetsWithCodeBlockComponent(selector: string) {
  const targets = document.querySelectorAll(selector)

  targets.forEach((target) => {
    const html = target.outerHTML
    const component = document.createElement('code-block')

    // 设置属性传递给 Vue 组件
    component.setAttribute('content', html)

    target.replaceWith(component)
  })
}

export function initializeCodeBlock(selector: string) {
  if (!customElements.get('code-block')) {
    customElements.define('code-block', CodeBlockElement)
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      replaceTargetsWithCodeBlockComponent(selector)
    })
  }
  else {
    replaceTargetsWithCodeBlockComponent(selector)
  }
}
