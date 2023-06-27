import styles from './AddTask.module.css'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState, useEffect, InvalidEvent } from 'react'

interface addTaskProps{
    retornaTask: (newTask:string) => void
}

export function AddTask( {retornaTask}: addTaskProps ){

    const [tasks, setTasks] = useState([''])

    console.log(tasks)

    const [newTask, setNewTask] = useState('')

    function handleAddNewTask(event:FormEvent){
        event.preventDefault()

        setTasks([...tasks, newTask])

        retornaTask(newTask)
        setNewTask('')
    }

    function handleChangeNewTask(event:ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewTask(event.target.value)
    }

    function handleNewTaskInvalid(event:InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }
    

    return(
        <form onSubmit={handleAddNewTask} className={styles.addTask}>
            <textarea 
                required = {true}
                placeholder='Adicione uma nova tarefa'
                value={newTask}
                onChange={handleChangeNewTask}
                onInvalid={handleNewTaskInvalid}
            ></textarea>
            <button type='submit'> Criar <PlusCircle /> </button>
        </form>
    )
}