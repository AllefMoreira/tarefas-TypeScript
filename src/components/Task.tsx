import { Trash } from "phosphor-react";
import styles from './Task.module.css'
import { ChangeEvent, useState, useEffect } from "react";

interface taskProps{
    content: string;
    retornaCount: (count:number) => void
}

export function Task( {content, retornaCount}:taskProps ){

    const [countTask, setCountTask] = useState(0)

    useEffect( () =>{
        retornaCount(countTask)
        console.log('func')
    }, [InputEvent])

    function tasksConcludes(event:ChangeEvent<HTMLInputElement>){

        if(event.target.checked == true){
            setCountTask((state) =>{
                return state + 1
            })
        } else {
            setCountTask((state) =>{
                return state - 1
            })
        }
    }

    return(
        <div className={styles.task}>
            <div className={styles.taskCheckAndInfo}> 
                <label className={styles.container}>
                    <input id = {content} type="checkbox" onChange={tasksConcludes} />
                    <span className={styles.check}></span>
                    {content}
                </label>
                
                <div className={styles.taskDelete}>
                    <Trash />
                </div>
            </div>            
        </div>
    )
}