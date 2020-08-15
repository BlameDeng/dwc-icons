import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    "enable-background": "new 0 0 32 32"
  }, [
    _createVNode("g", null, [
      _createVNode("path", { d: "m1.9 0h2.6v32h-2.6z" }),
      _createVNode("path", { d: "m30.1 16.3h-23v-16.3h23l-9.4 8.1z" })
    ])
  ]))
}