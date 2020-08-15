const fs = require("fs");
const path = require("path");
const { compile } = require("@vue/compiler-dom");

const iconsDir = path.resolve(__dirname, "..", "icons");
const componentsDir = path.resolve(__dirname, "components");
const iconListPath = path.resolve(__dirname, "icon-list.json");
const iconsJsPath = path.resolve(__dirname, "icons.js");

console.log("Start build icons...");
const startAt = Date.now();

function svgToVue(filename, filePath) {
  const svg = fs.readFileSync(filePath, "utf8");

  const code = compile(svg, {
    mode: "module",
  }).code;

  const iconName = filename.replace(/\.svg$/, "");

  const dest = path.resolve(componentsDir, iconName + ".js");

  fs.writeFileSync(dest, code, "utf8");

  iconList.add(iconName);
}

console.log("Building components...");

const iconList = new Set();

const dirs = [iconsDir];

while (dirs.length) {
  const current = dirs.shift();

  const subs = fs.readdirSync(current);

  for (const sub of subs) {
    const p = path.resolve(current, sub);
    const s = fs.statSync(p);

    if (s.isDirectory()) {
      dirs.push(p);
    } else {
      svgToVue(sub, path.resolve(current, sub));
    }
  }
}

fs.writeFileSync(iconListPath, JSON.stringify(Array.from(iconList)), "utf8");

console.log("Building icons.js...");

const codeList = [];

codeList.push(`import list from "./icon-list.json";`);

let o = "export const icons = {\n";

iconList.forEach((icon) => {
  codeList.push(
    `import { render as DWC${icon.replace(
      /-/g,
      "_"
    )} } from "./components/${icon}.js";`
  );

  o += `"${icon}": DWC${icon.replace(/-/g, "_")},\n`;
});

o += "};";

codeList.push(`export const iconList = list;`);

codeList.push(o);

const content = codeList.join("\n");

fs.writeFileSync(iconsJsPath, content, "utf8");

console.log(`Done in ${(Date.now() - startAt) / 1000} s.`);
