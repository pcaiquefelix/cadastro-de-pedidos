import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

export default function ProjectCard({ id, title, status, handleRemove }) {

    const remove = (e) => {
        handleRemove(id)
        // alert('Order deleted successfully!')
    }
    
    return (
        <div className={styles.project_card}>
            <h4>{title}</h4>
            <p>
                <span>ID:</span> {id}
            </p>
            <p className={styles.category_text}>
                <span className={styles[status.toLowerCase()]}></span> {status}
            </p>
            <div className={styles.project_card_actions}>
                <Link to={`/editorder/${id}`}>
                    <BsPencil /> Edit
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Delete
                </button>
            </div>
        </div>
    )
}