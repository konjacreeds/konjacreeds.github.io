import { defineCustomElement } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

export const CodeBlockElement = defineCustomElement(CodeBlock, { shadowRoot: true })
