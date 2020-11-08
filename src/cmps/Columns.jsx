import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { AddTask } from './AddTask';
import { Task } from './Task'
import CloseIcon from '@material-ui/icons/Close';



export function Columns({ column, tasks, index,addTask,createTD,removeColumn,removeTask,lockTasks,toggleIsLock,toggleIsShown,editData,addTD,toggleIsFinish,removeTD }) {

    



    return (
        <Draggable
            draggableId={column.id}
            index={index}
        >
            {(provided) => (
                <li
                 className='columns'
                 {...provided.draggableProps}
                 ref={provided.innerRef}
                 >
                     <div className='flex flex-end'>
                     <button onClick={()=>{removeColumn(column.id,index)}}><CloseIcon/></button>
                     </div>
                    <h2 {...provided.dragHandleProps}>{column.title}</h2>
                    <Droppable droppableId={column.id} type="task">
                        {(provided, snapshot) => (
                            <ul
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={`flex column ${snapshot.isDraggingOver ? 'dragging' : ''}`}
                            >
                                {tasks.map((task, index) => <Task editData={editData} toggleIsFinish={toggleIsFinish} addTD={addTD} key={task.id}
                                 toggleIsShown={toggleIsShown} task={task} index={index} removeTask={removeTask} columnId={column.id}
                                  lockTasks={lockTasks} toggleIsLock={toggleIsLock} removeTD={removeTD} createTD={createTD} />)}
                               <div className='place-holder'>

                                {provided.placeholder}
                               </div>
                            </ul>
                        )}
                    </Droppable>
                   <AddTask addTask={addTask} columnId={column.id}  />
                </li>
            )}
        </Draggable>
    )

}