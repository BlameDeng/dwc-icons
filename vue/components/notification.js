import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("path", { d: "m7.5 14c.9 0 1.5-.4 1.5-1h-3c0 .6.7 1 1.5 1" }),
    _createVNode("path", { d: "m11.7 10.4v-3.3c0-1.9-1.4-3.4-3.2-3.8v-.4c0-.4-.5-.9-1-.9-.6 0-1 .5-1 .9v.4c-1.9.5-3.2 2-3.2 3.8v3.3l-1.3 1.2v.4h11v-.4l-1.3-1.2" })
  ]))
}