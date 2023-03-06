import React from 'react'
import { useState } from 'react'

const Todolist = () => {
    const [task, setTask] = useState("")
    const [completed, setCompleted] = useState(false)

    let [listOfTasks, setListofTasks] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        let taskObj = {task, completed}
        console.log(taskObj)
        setListofTasks([...listOfTasks, taskObj])
    }

    const deleteTask = (e, i) => {
        let copy = listOfTasks.filter((taskobject, idx) => {
            return i !== idx;
        })
        setListofTasks(copy)
    }

    const markComplete = (idx) => {
        const updatedTasks = listOfTasks.map((taskobject, i) => {
            if (idx === i) {
            taskobject.completed = !taskobject.completed;
        }
        return task;
    });
    setCompleted(updatedTasks)
    }



  return (
    <>
    <div>
        <form onSubmit={submitHandler}>
            <label>Task:</label>
            <input onChange={(e) => setTask(e.target.value)} type="text" value={task}></input>
            <button type='submit'>Add Task</button>
        </form>
    </div>
    <div>
        {listOfTasks.map((taskobject, idx) => { 
            const taskClasses = [];
            if (taskobject.completed){
                taskClasses.push("line-through")
            }
            
            return(
                <div key={idx}>
                    <p className={taskClasses.join(" ")}><input checked={taskobject.completed} type="checkbox" name='completed' onChange={(e) => {markComplete(idx)}}></input>{taskobject.task}</p>
                    <button onClick={(e) => deleteTask(e, idx)}>Delete Task!</button>
                </div>
            )})
        }

    </div>
    </>
  )
}

// text-decoration: line-through;

export default Todolist
