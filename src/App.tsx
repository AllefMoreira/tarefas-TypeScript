import styles from './App.module.css'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { TaskMenu } from './components/TaskMenu'
import {useState} from 'react'


function App() {

  const [task, setTask] = useState([''])

  function retornaTask(newTasks:string){
    setTask([...task, newTasks])
  }

  return (
    <div className={styles.app}>
      <Header />
      <AddTask retornaTask = {retornaTask}/>
      <TaskMenu content = {task}/>
      
    </div>
  )
}

export default App
