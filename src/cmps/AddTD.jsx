import React from 'react'
import { useForm } from '../services/customHooks';

export function AddTD({addTD,taskId}) {

    const [td, handleChange] = useForm({ title: '' });

    const handleSubmit=(ev)=>{
        ev.preventDefault();
        addTD(taskId,td.title)
        handleChange()
    }


    return (
        <form onSubmit={(ev)=>{handleSubmit(ev)}}>
            <input name="title" autoComplete="off" placeholder='Add To Do' value={td.title} onChange={handleChange} type="text" />
        </form>
    )
}
