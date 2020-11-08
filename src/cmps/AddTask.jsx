import React from 'react'
import { useForm } from '../services/customHooks';

export function AddTask({addTask,columnId}) {

    const [task, handleChange] = useForm({ contact: '' });

    const handleSubmit=(ev)=>{
        ev.preventDefault();
        addTask(task.contact,columnId)
        handleChange()
    }


    return (
        <form onSubmit={(ev)=>{handleSubmit(ev)}}>
            <input name="contact" autoComplete="off" placeholder='Add task' value={task.contact} onChange={handleChange} type="text" />
        </form>
    )
}
