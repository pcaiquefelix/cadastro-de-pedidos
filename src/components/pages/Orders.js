import styles from './Orders.module.css'

import Container from '../layout/Container'
import NewOrderButton from '../buttons/NewOrderButton'
import ProjectCard from '../project/ProjectCard'

import { useEffect, useState } from 'react'

export default function Orders() {
    const [projects, setProjects] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProjects(data)
        })
        .catch((err) => console.log(err));
    }, [])

    function removeOrder(id) {

        fetch(`http://localhost:5000/projects/${id}`, {
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json())
        .then((data) => {
            setProjects(projects.filter((project) => project.id !== id))
        })
        .catch((err) => console.log(err));
    }

    return (
        <div className={styles.order_container}>
            <div className={styles.title_container}>
                <h1>My Orders</h1>
                <NewOrderButton to="/neworder" text="New Order" />
            </div>
            <Container customClass="start">
                {projects.length > 0 && projects.map((project) => (
                    <ProjectCard 
                        id={project.id}
                        title={project.title}
                        status={project.status}
                        handleRemove={removeOrder}
                    />
                ))}
            </Container>
        </div>
    )
}