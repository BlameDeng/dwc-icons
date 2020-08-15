import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    _createVNode("circle", {
      cx: "10",
      cy: "10",
      fill: "#0ff",
      r: "7.5"
    }),
    _createVNode("path", { d: "m10 3a7 7 0 1 1 -7 7 7.00793 7.00793 0 0 1 7-7m0-1a8 8 0 1 0 8 8 8 8 0 0 0 -8-8z" }),
    _createVNode("path", { d: "m11 14h-2v-2h2zm0-8h-2v4.66667h2z" })
  ]))
}