import { Link } from "react-router-dom";
import styles from "./NewOrderButton.module.css"

export default function NewOrderButton({ to, text }) {
    return (
        <Link className={styles.button} to={to}>
            {text}
        </Link>
    )
}