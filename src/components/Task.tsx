import { Trash } from "phosphor-react";
import styles from './Task.module.css'

interface taskProps{
    content: string;
    retornaCount: (count:number) => void
}

export function Task( {content, retornaCount}:taskProps ){

    function tasksConcludes(){
        var contAux = 0
        var checkCount = document.getElementsByTagName('input')

        for(let i = 0; i < checkCount.length; i++){
            if(checkCount[i].checked){
                contAux = contAux + 1
            }
        }

        retornaCount(contAux)
    }

    return(
        <div className={styles.task}>
            <div className={styles.taskCheckAndInfo}> 
                <label  className={styles.container}>
                    <input id = {content} type="checkbox" onChange={tasksConcludes}/>
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