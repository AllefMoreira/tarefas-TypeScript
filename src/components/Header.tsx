import styles from './Header.module.css'
import todoLogo from '../assent/todo-logo.png'

export function Header(){
    return(
        <header className={styles.header}>
            <img src={todoLogo} />
        </header>
    )
}