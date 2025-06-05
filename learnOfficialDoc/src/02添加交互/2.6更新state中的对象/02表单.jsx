import { useState } from "react";
import { useImmer } from "use-immer";

export default function Form() {

    const [msg, setMsg] = useState({
        name: 'zhangsan',
        email: '123456@example.com'
    })

    // 嵌套对象数据
    const [nestingMsg, setNestingMsg] = useState({
        name: 'lisi',
        body: {
            height: 190,
            weight: '100kg',
        }
    })

    const [iMsg, updateIMsg] = useImmer({
        name: 'wangwu',
        body: {
            height: 190,
            weight: '100kg',
        }
    })


    const handleMsgChange = e => {
        setMsg({
            ...msg,
            [e.target.name]: e.target.value,
        });
    }

    const handleNameChange = e => {
        setNestingMsg({
            ...nestingMsg,
            name: e.target.value,
        })
    }

    const handleBodyChange = e => {
        setNestingMsg({
            ...nestingMsg,
            body: {
                ...nestingMsg.body,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleINameChange = e =>{
        updateIMsg(draft =>{
            draft.name=e.target.value;
        })
    }

    const handleIBodyChange = e =>{
        updateIMsg(draft =>{
            draft.body[e.target.name] = e.target.value;
        })
    }



    return (
        <div>
            <p>对象数据处理：</p>
            <label for="name" >name:</label><input id="name" name="name" type="text" onChange={handleMsgChange} />
            <label >email:<input id="email" name="email" type="text" onChange={handleMsgChange}></input></label>
            <p>msg: {msg.name}-{msg.email}</p>
            <hr />
            <p>嵌套对象数据处理：</p>
            <label >name:<input type="text" name="name" onChange={handleNameChange} /></label>
            <label >body.height<input type="text" name="height" onChange={handleBodyChange} /></label>
            <label >body.weight<input type="text" name="weight" onChange={handleBodyChange} /></label>
            <p>nestingMsg:{nestingMsg.name}-{nestingMsg.body.height}-{nestingMsg.body.weight}</p>
            <hr />
            <p>使用Immer库处理嵌套对象:</p>
              <label >iname:<input type="text" name="name" onChange={handleINameChange} /></label>
            <label >ibody.height<input type="text" name="height" onChange={handleIBodyChange} /></label>
            <label >ibody.weight<input type="text" name="weight" onChange={handleIBodyChange} /></label>
            <p>nestingMsg:{iMsg.name}-{iMsg.body.height}-{iMsg.body.weight}</p>

        </div>
    )
}