import classes from './Input.module.css'
const Input = (props) => {
    return (
        <div className={classes.input__container}>
            <label htmlFor={props.label}>{props.label}</label>
            {props.isValidInput && <p className={classes.error__msg}>{props.errorMsg}</p>}
            <input {...props.input}/>
        </div>
    )
}
export default Input