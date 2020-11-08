import React from 'react';
import { useEffect, useState } from 'react';
import dataService from '../services/initialDataService'
import { Columns } from './Columns';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { randomId } from '../services/utilService';
import { AddColumn } from './AddColumn';
import eventBus from '../services/eventBusService'


export function Specialities(props) {


    const [data, setData] = useState(dataService.query());
    const [lockTasks, setLockTasks] = useState(dataService.getLocks());


    useEffect(() => {
        dataService.updateData(data);
    }, [data])

    useEffect(() => {
        dataService.updateLocks(lockTasks);
    }, [lockTasks])

    const onDragEnd = result => {
        document.body.style.color = 'inherit'
        document.body.style.backgroundColor = 'inherit'
        const { destination, source, draggableId, type } = result;
        if (!destination) return;
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) return;

        if (type === 'column') {
            const newColumnOrder = Array.from(data.columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0, draggableId);

            const newData = {
                ...data,
                columnOrder: newColumnOrder
            }

            setData(newData);
            return;
        }

        const start = data.colums[source.droppableId];
        const finish = data.colums[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
            const newColumn = {
                ...start,
                taskIds: newTaskIds
            }

            const newData = {
                ...data,
                colums: {
                    ...data.colums,
                    [newColumn.id]: newColumn
                }
            }

            setData(newData);
            return;
        }

        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds
        };

        const newData = {
            ...data,
            colums: {
                ...data.colums,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            }
        }
        setData(newData);
    }

    const removeColumn = (columnId, orderIndex) => {
        const taskIds = [...data.colums[columnId].taskIds];

        const newColumnOrder = [...data.columnOrder]
        newColumnOrder.splice(orderIndex, 1);

        const newColums = { ...data.colums }
        delete newColums[columnId];

        const newTasks = { ...data.tasks };
        taskIds.forEach(id => delete newTasks[id])

        const newData = {
            tasks: newTasks,
            colums: newColums,
            columnOrder: newColumnOrder
        }

        console.log(newData);

        setData(newData);
    }

    const removeTask = (taskId, columnId) => {
        const newTaskIds = data.colums[columnId].taskIds.filter(id => id !== taskId);
        const newColums = {
            ...data.colums,
            [columnId]: {
                ...data.colums[columnId],
                taskIds: newTaskIds
            }
        }
        const newTasks = { ...data.tasks }
        delete newTasks[taskId];
        const newData = {
            ...data,
            tasks: newTasks,
            colums: newColums
        }

        setData(newData);

    }

    const addTask = (contact, columnId) => {
        const id = randomId();
        const newTask = { id, contact, info: { media: '', show: true } }
        const newData = {
            tasks: {
                ...data.tasks,
                [id]: newTask
            },
            colums: {
                ...data.colums,
                [columnId]: {
                    ...data.colums[columnId],
                    taskIds: [...data.colums[columnId].taskIds, id]
                }
            },
            columnOrder: [
                ...data.columnOrder
            ]

        }

        setData(newData);
    }

    const addColumn = (title) => {
        const id = randomId();
        const newColumn = { id, title, taskIds: [] }
        const newData = {
            tasks: { ...data.tasks },
            colums: { ...data.colums, [id]: newColumn },
            columnOrder: [...data.columnOrder, id]
        }
        setData(newData);
    }

    const onDragStart = (ev) => {
        console.log(ev);
        eventBus.emit('close-menu', ev.draggableId)
        document.body.style.color = 'grey'
    }

    const onDragUpdate = update => {
        const { destination } = update;
        const opacity = destination ? destination.index / Object.keys(data.tasks).length : 0;
        document.body.style.backgroundColor = `rgba(180, 214, 211,${opacity})`
        document.body.style.transition = 'background-color .3s ease'
    }

    const toggleIsLock = (taskId) => {
        const idx = lockTasks.findIndex(LocktaskId => LocktaskId === taskId);
        if (idx === -1) setLockTasks([...lockTasks, taskId])
        else {
            const newLockTasks = [...lockTasks];
            newLockTasks.splice(idx, 1);
            setLockTasks(newLockTasks);
        }
    }

    const toggleIsShown = (taskId) => {
        const newTask = { ...data.tasks[taskId] }
        newTask.info.show = !newTask.info.show;
        const newData = {
            ...data,
            tasks: { ...data.tasks, [taskId]: newTask }
        }
        setData(newData);
    }

    const editData = (taskId, media) => {
        const newTask = { ...data.tasks[taskId] }
        newTask.info.media = media;
        const newData = {
            ...data,
            tasks: { ...data.tasks, [taskId]: newTask }
        }
        setData(newData);
    }

    const addTD = (taskId, title) => {
        const newTask = { ...data.tasks[taskId] }
        newTask.info.tdList.push({ isFinish: false, title })
        const newData = {
            ...data,
            tasks: { ...data.tasks, [taskId]: newTask }
        }
        setData(newData);
    }

    const toggleIsFinish = (taskId, idx) => {
        const newTask = { ...data.tasks[taskId] }
        newTask.info.tdList[idx].isFinish = !newTask.info.tdList[idx].isFinish
        const newData = {
            ...data,
            tasks: { ...data.tasks, [taskId]: newTask }
        }
        setData(newData);
    }

    const removeTD = (taskId, tdIdx) => {
        const newTask = { ...data.tasks[taskId] }
        newTask.info.tdList.splice(tdIdx, 1);
        const newData = {
            ...data,
            tasks: { ...data.tasks, [taskId]: newTask }
        }
        setData(newData);
    }

    const createTD = (taskId) => {
        const newTask = { ...data.tasks[taskId] }
        if (newTask.info.tdList) return;
        newTask.info.tdList = [];
        const newData = {
            ...data,
            tasks: { ...data.tasks, [taskId]: newTask }
        }
        setData(newData);
    }



    return (
        <div className='main-div'>

            <DragDropContext
                onDragEnd={onDragEnd}
                onDragStart={onDragStart}
                onDragUpdate={onDragUpdate}
            >
                <section className='flex align-start specialities'>
                    <Droppable droppableId="all-columns" direction="horizontal" type="column">
                        {provided => (

                            <ul
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className='flex align-start'
                            >
                                {
                                    data.columnOrder.map((columnId, index) => {
                                        const column = data.colums[columnId];
                                        const tasks = column.taskIds.map(taskId => data.tasks[taskId]);
                                        return <Columns key={column.id} addTD={addTD} editData={editData} column={column}
                                            tasks={tasks} index={index} toggleIsShown={toggleIsShown} toggleIsFinish={toggleIsFinish}
                                            addTask={addTask} removeColumn={removeColumn} removeTask={removeTask} lockTasks={lockTasks}
                                            toggleIsLock={toggleIsLock} removeTD={removeTD} createTD={createTD} />
                                    })
                                }
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                    <div className='add-column-container'>
                        <AddColumn addColumn={addColumn} />
                    </div>
                </section>
            </DragDropContext>
        </div>
    )

}