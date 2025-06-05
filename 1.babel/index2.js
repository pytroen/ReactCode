import Babel from '@babel/core'
import presetEnv from '@babel/preset-env'
import react from '@babel/preset-react' //支持jsx

import fs from 'node:fs'

const code = fs.readFileSync('./app.jsx','utf-8')
const result = Babel.transform(code,{
    presets:[
        [presetEnv,{useBuiltIns:"usage",corejs:3}],
        react,
    ]
})

console.log(result.code);