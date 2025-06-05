import { useState } from "react"

export default function EditProfile() {
    const [isEdit, setIsEdit] = useState(false);
    const [FirstName, setFirstName] = useState('Jane');
    const [LastName, setLastName] = useState('Jacobs');
    return (
        <form action="" onSubmit={e => {
            e.preventDefault();
            setIsEdit(!isEdit)
        }}>
            <label htmlFor="">
                FirstName :{isEdit ? <input value={FirstName} onChange={e => setFirstName(e.target.value)} /> : FirstName}
            </label>
            <br />
            <label htmlFor="">
                LastName :{isEdit ? <input value={LastName} onChange={e => setLastName(e.target.value)} /> : LastName}
            </label>
            <br />
            <button>{isEdit ? 'Edit' : 'Save'} Profile</button>
            <p>Hello {FirstName}{LastName}</p>
        </form>
    )
}