import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import OrderForm from '../project/OrderForm'

import styles from './EditOrder.module.css'


export default function EditOrder() {
    const { id } = useParams();
    
    const [project, setProject] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data);
        })
        .catch((err) => console.log(err));
    }, [id]);

    function editPost(project) {

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data);
        })
        .catch((err) => console.log(err))

    }

    return (
        <div className={styles.editorder_body}>
            <h1>Edit Your Order Here</h1>
            <OrderForm
                handleSubmit={editPost}
                btnText="Finish Edition"
                projectData={project}
                message="Your order was updated successfully!"
            />
        </div>
    )
}