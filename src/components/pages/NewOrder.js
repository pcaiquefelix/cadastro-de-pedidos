import OrderForm from "../project/OrderForm"
import styles from "./NewOrder.module.css"

export default function NewOrder() {

    function createPost(project) {
        if (!project) {
            project.id = 0;
            project.name = [];
        }

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }

    return (
        <div className={styles.neworder_body}>
            <h1>Create a New Order Here</h1>
            <OrderForm 
                handleSubmit={createPost}
                btnText="Create Order"
                message="Your order was created successfully!"
            />
        </div>
    )
}