import NewOrderButton from "../buttons/NewOrderButton"
import styles from "./Home.module.css"

export default function Home() {
    return (
        <section className={styles.home_body}>
            <h1>
                Welcome to <span>Orders</span>
            </h1>
            <p>Here you can manage all of your orders.</p>
            <NewOrderButton to="/neworder" text="New Order" />
        </section>
    )
}