import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    _createVNode("path", {
      d: "m2.5 2.5h15v15h-15z",
      fill: "#f60"
    }),
    _createVNode("path", { d: "m17 3v14h-14v-14zm1-1h-16v16h16z" }),
    _createVNode("path", { d: "m9 14h-2v-2h2zm0-8h-2v4.66667h2zm4 8h-2v-2h2zm0-8h-2v4.66667h2z" })
  ]))
}