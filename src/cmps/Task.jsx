import React, { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import ListIcon from '@material-ui/icons/List';
import InfoIcon from '@material-ui/icons/Info';
import EditIcon from '@material-ui/icons/Edit';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import CloseIcon from '@material-ui/icons/Close';
import { EditData } from './EditData';
import { AddTD } from './AddTD';
import eventBus from '../services/eventBusService'
import { cloudinaryService } from '../services/cloudinaryService'
import AttachmentIcon from '@material-ui/icons/Attachment';






export function Task({ task, index, removeTask, columnId, lockTasks, createTD, toggleIsLock, toggleIsShown, editData, addTD, toggleIsFinish, removeTD }) {

    const isDragDisabled = lockTasks.some(taskId => taskId === task.id);

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [editIsOpen, setEditIsOpen] = useState(false);

    useEffect(() => {
        let unsubscribe1 = null;
        let unsubscribe2 = null;
        unsubscribe1 = eventBus.on('toggle-is-open', (taskId) => {
            if (taskId !== task.id) setIsMenuOpen(false)
        })
        unsubscribe2 = eventBus.on('close-menu', (taskId) => {
            if (taskId === task.id) setIsMenuOpen(false)
        })

        return () => {
            unsubscribe1 = null
            unsubscribe2 = null;
        }



    }, [])


    const toggleDataEdit = () => {
        setEditIsOpen(!editIsOpen);
    }

    const toggleIsOpen = (fn = () => { }, vars = []) => {
        eventBus.emit('toggle-is-open', task.id)
        setEditIsOpen(false)
        fn(...vars);
        setIsMenuOpen(!isMenuOpen)
    }

    const uploadImg=async (ev) => {
        const { name } = ev.target
        try {
            const newImg = await cloudinaryService.uploadImg(ev);
            const img = newImg.secure_url;
            editData(task.id,img)
            setEditIsOpen(false);
        } catch (err) {
        }
    }


    return (
        <Draggable draggableId={task.id} index={index} isDragDisabled={isDragDisabled}>
            {(provided, snapshot) => (
                <li
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    className={`${snapshot.isDragging ? 'dragging' : ''} ${isDragDisabled ? 'no-drag' : ''} flex space-between align-center task`}
                // isDragging={snapshot.isDragging}
                >

                    <div className='flex column'>
                        <div className='flex space-between title'>

                            <div className='flex align-center '>
                                <div className='handle' {...provided.dragHandleProps}></div>
                                <p>{task.contact}</p>
                            </div>
                            <div className='flex align-center'>
                                {task.info.media && task.info.media.split('.')[1] !== 'youtube' &&
                                    <ImageIcon />
                                }
                                {task.info.media && task.info.media.split('.')[1] === 'youtube' &&
                                    <YouTubeIcon />
                                }
                                {task.info.tdList &&
                                    <ListIcon />
                                }
                                <button className='menu-btn' onClick={() => toggleIsOpen()}><MoreHorizIcon /></button>
                            </div>
                        </div>
                        {(task.info.media && task.info.show && task.info.media.split('.')[1] !== 'youtube') &&
                            <img src={task.info.media} alt="" />}
                        {(task.info.media && task.info.show && task.info.media.split('.')[1] === 'youtube') &&
                            <iframe width="180" height="150" title={task.contacts} src={`https://www.youtube.com/embed/${task.info.media.split('watch?v=')[1]}`}></iframe>}

                        {(task.info.tdList && task.info.show) &&
                            <div className='list-container'>
                                <ul className='list'>
                                    {task.info.tdList.map((td, idx) => (
                                        <li className='flex space-between' key={idx} >
                                            <div className={`flex align-center ${td.isFinish ? 'done' : ''}`}>
                                                <input onClick={() => toggleIsFinish(task.id, idx)} type="checkbox" defaultChecked={td.isFinish} />
                                                {td.title}
                                            </div>
                                            <button onClick={() => removeTD(task.id, idx)}><CloseIcon /></button>
                                        </li>
                                    ))}
                                </ul>
                                <AddTD addTD={addTD} taskId={task.id} />
                            </div>
                        }
                    </div>

                    {editIsOpen && <div className='edit-container'>
                        <div className='flex flex-end'>

                            <button onClick={toggleDataEdit}><CloseIcon /></button>
                        </div>
                        <EditData editData={editData} taskId={task.id} toggleDataEdit={toggleDataEdit} />
                        <label className="upload-btn flex align-center" htmlFor="upload-file"><AttachmentIcon/> Upload Img </label>
                        <input hidden type="file" className="file-input" name="img" id="upload-file"
                            onChange={uploadImg} />
                    </div>}



                    {isMenuOpen && <div className='menu'>
                        <button onClick={() => { toggleIsOpen() }}><CloseIcon/> close</button>
                        {!isDragDisabled && <button onClick={() => { toggleIsOpen(removeTask, [task.id, columnId]) }}><DeleteOutlineOutlinedIcon /> Remove</button>}
                        <button onClick={() => { toggleIsOpen(toggleIsLock, [task.id]) }}>{isDragDisabled ? <LockOpenOutlinedIcon /> : <LockOutlinedIcon />} {isDragDisabled ? 'Unlock' : 'Lock'}</button>
                        <button onClick={() => { toggleIsOpen(toggleIsShown, [task.id]) }}><InfoIcon /> {task.info.show ? 'Unshow' : 'Show'}</button>
                        <button onClick={() => { toggleIsOpen(toggleDataEdit) }}><ImageIcon /> Media</button>
                        <button onClick={() => { toggleIsOpen(createTD, [task.id]) }}><ListIcon /> List</button>
                    </div>}

                </li>
            )}
        </Draggable>
    )

}