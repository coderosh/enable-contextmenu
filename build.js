import fs from "fs";
import ejs from "ejs";
import path from "path";
import esbuild from "esbuild";

const [js, temp] = [
  ["src", "index.js"],
  ["src", "template.md"],
].map((a) => fs.readFileSync(path.join(...a), "utf-8"));

const code = esbuild
  .transformSync(js, { minify: true })
  .code.replace(/"/g, "`");

const html = ejs.render(temp, { code, js });

if (!fs.existsSync("docs")) fs.mkdirSync("docs");

fs.writeFileSync(path.join("docs", "index.md"), html);
