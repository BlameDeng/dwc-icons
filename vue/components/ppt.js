import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    _createVNode("path", {
      d: "m11 3v-3h-9v16h12v-13z",
      fill: "#e8953d"
    }),
    _createVNode("path", {
      d: "m7.5 9.5h3.5a3.5 3.5 0 1 1 -3.5-3.5zm1-4.5v3.5h3.5a3.5 3.5 0 0 0 -3.5-3.5z",
      fill: "#fff"
    }),
    _createVNode("path", {
      d: "m11 0 3 3h-3z",
      fill: "#a2682b"
    })
  ]))
}