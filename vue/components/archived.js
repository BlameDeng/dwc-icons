import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    "enable-background": "new 0 0 16 16"
  }, [
    _createVNode("g", { transform: "translate(0-1)" }, [
      _createVNode("path", { d: "M11,8v2H5V8H0v7h16V8H11z" }),
      _createVNode("path", { d: "M6,8h4v1H6" }),
      _createVNode("path", { d: "M11,1v2H5V1H0v6h16V1H11z" }),
      _createVNode("path", { d: "M6,1h4v1H6" })
    ])
  ]))
}