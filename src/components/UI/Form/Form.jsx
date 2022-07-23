import Input from "../Input/Input";
import classes from './Form.module.css'
const Form = (props) => {
  console.log("Form Invoked",props);
  const submitFormHandler = (event) => {
    event.preventDefault()
    props.onSubmit(true)
  }
  const cancelFormHandler = (event) => {
    event.preventDefault()
    props.onSubmit(false)
  }
  return (
    <form onSubmit={submitFormHandler} className={`${classes.form__container} ${props.className}`}>
      <div>
        {props.fieldList.map((field) => {
          return (
            <Input key={field.id}
              label={field.static.label}
              input={{
                ...field.static.input,
                value: field.action.value,
                onChange: field.action.onChangeHandler,
                onBlur: field.action.onBlurHandler,
              }}
              errorMsg={field.static.errorMsg}
              isValidInput={field.action.hasError}
            />
          );
        })}
      </div>
      <div className={classes.btn__container}>
        <button type="submit">Save</button>
        <button onClick={cancelFormHandler}>Cancel</button>
      </div>
    </form>
  );
};
export default Form;
