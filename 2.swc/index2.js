import swc from '@swc/core'
// 使用node index.js命令时需要保证package.json中"type": "module",在项目目录下使用npx spack打包命令则需要保证package.json中"type": "commonjs",
const result = swc.transformFileSync('./app.jsx', {
    jsc: {
        parser: {
            syntax: "ecmascript",
            jsx:true,
        },
        target:"es5"

    }
});
console.log(result.code);