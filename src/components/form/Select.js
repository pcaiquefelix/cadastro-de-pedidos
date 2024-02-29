import styles from './Select.module.css'

export default function Select({ text, name, options, handleOnChange, value }) {
    return (
       <div className={styles.form_select}>
            <label>{text}</label>
            <select name={name} id={name} onChange={handleOnChange} value={value} >
                <option>Select the status</option>
                {options.map((option) => (
                    <option id={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>

       </div>
    )
}