import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", null, [
      _createVNode("path", { d: "m5 12h5v1h-5z" }),
      _createVNode("path", { d: "m4 1h8v2h1v-2c0-.6-.4-1-1-1h-8c-.6 0-1 .4-1 1v2h1v-2" }),
      _createVNode("path", { d: "m5 10h6v1h-6z" }),
      _createVNode("path", { d: "m15 4h-14c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h2v3c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-3h2c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1m-3 11h-8v-6h8v6m2-8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1" })
    ])
  ]))
}