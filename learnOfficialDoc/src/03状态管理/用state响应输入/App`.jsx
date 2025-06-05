import axios from 'axios';
import { useState } from 'react';
export default function Form() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');
    if (status === 'success') {
        return <h1>success</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm();
            setStatus('success');
        } catch(err){
            setStatus('typing');
            setError(err);
        }
    }

    function handleTextareaChange(e) {
        setAnswer(e.target.value)
    }

    function submitForm(){
       return new Promise((resolve, reject) => {axios.post("http://httpbin.org/pos",{
        res: answer,
       }).then((res) => {
            console.log(res);
            resolve(res);
        }).catch((err) => {
            console.error(err);
            // reject(new Error('提交失败，请稍后再试'));
            reject(err);
        })})
    }

    return (
        <>
            <h2>介绍</h2>
            <p>简单介绍一下你自己</p>
            <form action="" onSubmit={handleSubmit}>
                <textarea name="des" id="description" value={answer} onChange={handleTextareaChange}
                    disabled={status === 'submitting'}></textarea>
                <br />
                <button disabled={answer.length === 0 || status === 'submitting'} >
                    提交
                </button>

                {error !== null && <p>{error.message}</p>}
            </form>

        </>

    )

}