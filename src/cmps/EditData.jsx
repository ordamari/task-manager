import React from 'react'
import { useForm } from '../services/customHooks';

export function EditData({editData,taskId,toggleDataEdit}) {

    const [data, handleChange] = useForm({ media: '' });

    const handleSubmit=(ev)=>{
        editData(taskId,data.media)
        ev.preventDefault();
        toggleDataEdit();
    }


    return (
        <form onSubmit={(ev)=>{handleSubmit(ev)}}>
            <input name="media" autoComplete="off" placeholder='img or youtube link' value={data.media} onChange={handleChange} type="text" />
        </form>
    )
}
