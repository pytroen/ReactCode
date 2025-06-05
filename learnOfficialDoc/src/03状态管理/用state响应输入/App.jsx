import { useState } from "react";
import axios from "axios";
export default function Form() {
    const [answer, setAnswer] = useState('');
    const [status, setStatus] = useState('typing');
    const [error, setError] = useState('');

    if(status==='success'){
        return <h2>success</h2>
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submiting');
        try {
            const data = await submitForm();
            console.log(data);
            setStatus('success')

        }catch(err){
            setStatus('typing')
            setError(err)
        }
      
    }


    function submitForm() {
        return new Promise((reslove, reject) => {
            axios.post("http://httpbin.org/post", {
                res: answer,
            }).then(data => {
                reslove(data);
            }).catch(err => {
                reject(new Error("响应失败,请检查网络、url和配置"))
                // reject(err);
            })
        })
    }

    function handleChange(e) {
        setAnswer(e.target.value);
    }

    return (
        <>
            <h2>简介</h2>
            <p>简单介绍你自己</p>
            <form action="" onSubmit={handleSubmit}>
                <textarea name="des" id="description" disabled={status === 'submitting'} onChange={handleChange}></textarea>
                <button disabled={status === 'submiting' || answer.length === 0}>提交</button>
            </form>
            {error !== null && <p>{error.message}</p>}


        </>)
}