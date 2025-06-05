// 使用node index.js命令时需要保证package.json中"type": "module",在项目目录下使用npx spack打包命令则需要保证package.json中"type": "commonjs",
import qwert from "./test3.js";
qwert('msc');