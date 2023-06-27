import styles from './TaskMenu.module.css'
import imgTask from '../assent/Clipboard.png'
import { Task } from './Task'
import { useState } from 'react' 

interface taskMenuProps{
    content: string[]
}

export function TaskMenu( {content}: taskMenuProps ){ 

    const [count, setCount] = useState(0)

    function retornaCount(countReturn:number){
        setCount(countReturn)
    }

    return(
        <div className={styles.taskContainer}>
            <div className={styles.taskHeader} >
                <p className={styles.taskTotal}>Tarefas criadas <span> {content.length} </span></p>
                <p className={styles.taskConcluded}>Concluídas <span> {count} de {content.length} </span></p>
            </div>
            {
                (content.length > 0)?
                <div className={styles.taskCommentsOn}>
                    {
                        content.map(contents =>{
                            return (<Task
                                content = {contents}
                                retornaCount = {retornaCount}/>
                        )})
                    }
                </div>
                :
                <div className={styles.taskContentEmpty}>
                    <img src={imgTask} />
                    <p className={styles.firstInfo}>Você ainda não tem tarefas cadastradas</p>
                    <p className={styles.secInfo}>Crie tarefas e organize seus itens a fazer</p>
                </div>
            }
            
            
        </div>
    )
}