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
      d: "m11.19141 13.33154h-1.40821v-3.85547l.01368-.63378.02343-.69239c-.23437.23438-.39648.3877-.48828.46l-.76562.61524-.67871-.8477 2.14648-1.709h1.15723z",
      fill: "#fff"
    })
  ]))
}