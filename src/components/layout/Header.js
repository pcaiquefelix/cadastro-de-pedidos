import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import Container from "./Container";

export default function Header() {
    return(
        <nav className={styles.header}>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/orders">Orders</Link>
                    </li>
                </ul>
            </Container>
        </nav>
        // <Link></Link>
    )
}