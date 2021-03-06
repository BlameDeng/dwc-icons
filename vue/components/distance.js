import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("rect", {
      y: "11",
      width: "16",
      height: "1"
    }),
    _createVNode("polygon", { points: "15 4 15 5.875 12 4 12 6 4 6 4 4 1 5.875 1 4 0 4 0 9 1 9 1 7.125 4 9 4 7 12 7 12 9 15 7.125 15 9 16 9 16 4 15 4" })
  ]))
}