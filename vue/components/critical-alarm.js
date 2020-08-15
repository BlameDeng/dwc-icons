import { createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue"

export function render(_ctx, _cache) {
  return (_openBlock(), _createBlock("svg", {
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    _createVNode("path", {
      d: "m3.42888 3.42888h13.14224v13.14224h-13.14224z",
      fill: "#ed1c24",
      transform: "matrix(.70710678 -.70710678 .70710678 .70710678 -4.14214 10)"
    }),
    _createVNode("path", { d: "m10 1.41422 8.58578 8.58578-8.58578 8.58578-8.58578-8.58578zm0-1.41422-10 10 10 10 10-10z" }),
    _createVNode("path", {
      d: "m6.5 9h7v2h-7z",
      fill: "#fff"
    })
  ]))
}