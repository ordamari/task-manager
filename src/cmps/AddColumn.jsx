import React from 'react'
import { useForm } from '../services/customHooks';

export function AddColumn({addColumn}) {

    const [column, handleChange] = useForm({ title: '' });

    const handleSubmit=(ev)=>{
        ev.preventDefault();
        addColumn(column.title);
        handleChange()
    }


    return (
        <form onSubmit={(ev)=>{handleSubmit(ev)}}>
            <input name="title" autoComplete="off" placeholder='Add card' value={column.title} onChange={handleChange} type="text" />
        </form>
    )
}
