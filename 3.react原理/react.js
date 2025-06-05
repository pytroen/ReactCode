const React = {
    createElement(type,props,...children){
        return {
            type,
            props:{
                ...props,
                children:children.map(child =>{
                    return typeof child === 'object'?child:this.createText(child);
                }),
            }
        }
    },
    createText(text){
        return{
            type:'TEXT_ELEMENT',
            props:{
                nodeValue:text,
                children:[],
            }
        }
    }
}


const virtualDOM = React.createElement('div',{class:'content'},React.createElement('span',{class:'item'},'内部'));
console.log(virtualDOM);