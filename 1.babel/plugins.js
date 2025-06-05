import Babel from '@babel/core'
import fs from 'node:fs'

// 编写一个箭头函数转化插件
//babel会注入一个types对象里面包含了各种AST节点的方法
const transformFunction = ({types:t})=>{
    return {
        name:'transformFunction',
          //visitor 是一个对象，它包含了一组方法，这些方法对应于 AST 中的不同节点类型。每当 Babel 遇到某种类型的节点时，都会调用 visitor 中对应的方法。
        visitor:{
            ArrowFunctionExpression(path){
                // console.log(path.node);
                const node = path.node;
                // 最新的变成FunctionDeclaration了
                const arrowFunction = t.FunctionDeclaration(
                    null, ////node.id 是一个 Identifier 节点，表示函数名
                    node.params, //node.params 是一个数组，表示函数的参数
                    t.blockStatement([t.returnStatement(node.body)]), //BlockStatement 是 JavaScript 抽象语法树（AST）中的一种节点类型，表示一个由大括号 {} 包围的语句块。它是函数体、循环体、条件分支（如 if 语句）等代码块的基础结构
                    node.async, //node.body 是函数的主体，通常是一个 BlockStatement 节点
                );
                path.replaceWith(arrowFunction) //替换当前节点
            }
        }
    }
}
const code = fs.readFileSync('./test.js','utf-8');
const result = Babel.transform(code,{
    plugins:[transformFunction]
})

console.log(result.code);