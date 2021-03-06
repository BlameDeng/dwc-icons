import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16"
  }, [
    _createVNode("path", {
      d: "M8,1.5A6.5,6.5,0,1,1,1.5,8,6.50736,6.50736,0,0,1,8,1.5M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0Z",
      fill: "#c00"
    }),
    _createVNode("path", {
      d: "M9,12H7V10H9ZM9,9H7V4H9Z",
      fill: "#c00",
      "fill-rule": "evenodd"
    })
  ]))
}