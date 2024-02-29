import { Link } from "react-router-dom"
import truck from "../../img/truck.jpg"
import styles from "./Footer.module.css"

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <img src={truck} alt="Truck" />
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/orders">Orders</Link>
                </li>
            </ul>
        </footer>
    )
}