//rafce:

import React, {useEffect, useState} from 'react'
import { loadTasks } from '../store/tasks';
import { useDispatch, useSelector } from 'react-redux';                 // *

const Tasks = () => {       

    //const taskSlice = useSelector(state => state.tasks);              // tasks slice, όλο το object.
    const {tasks, loading} = useSelector(state => state.tasks);         // δεν θέλουμε τα erros.

    const dispatch = useDispatch();                                     // *

    useEffect( ()=> {                                                    // *
        dispatch(loadTasks());
    }, [] )
   
    console.log(tasks);

    return (
        <>
            {loading ? <p>loading...</p> : 
                <div>
                    <p><u>Data fron the Server:</u></p>
                    
                    {tasks.map(task => <p key={task.id} > {task.task} </p> )}              
                </div>
            }            
        </>        
    )

};

export default Tasks

// useEffect, runs first when our component gets Render.