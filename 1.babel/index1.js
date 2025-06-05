import Babel from '@babel/core'
import presetEnv from '@babel/preset-env' //es6 ->es5核心包
import fs from 'node:fs'

const file = fs.readFileSync('./test.js','utf-8');
const result = Babel.transform(file,{
    presets:[
        [presetEnv,{ 
        // usage按需引入
        // entry 手动引入
        useBuiltIns:"usage",corejs:3
    }]],
});
console.log(result.code);
