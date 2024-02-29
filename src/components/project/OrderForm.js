import { useEffect, useState } from "react";
import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import styles from "./OrderForm.module.css"

export default function OrderForm({ handleSubmit, btnText, projectData, message }) {
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then((resp) => resp.json())
        .then((data) => setCategories(data))
        .catch((err) => console.log(err));
    }, []);

    const submit = (e) => {
        // e.preventDefault();
        handleSubmit(project);
        alert(message)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value });
    }

    function handleStatus(e) {
        setProject({ ...project, status: e.target.value
            });
    }
    
    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="number"
                text="ID"
                name="id"
                placeholder="Insert the order ID"
                handleOnChange={handleChange}
            />
            <Input 
                type="text"
                text="Order Title"
                name="title"
                placeholder="Insert the order title"
                handleOnChange={handleChange}
            />
            <Select 
                name="category_id" 
                text="Select The Order Status" 
                options={categories}
                handleOnChange={handleStatus}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}