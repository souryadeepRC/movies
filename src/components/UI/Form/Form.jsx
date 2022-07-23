
import Input from "../Input/Input";
import classes from './Form.module.css'
const Form = (props) => {

  const isFormValid = props.fieldList.reduce(
    (validity, field) => validity && field.action.isValidData,
    true
  );

  const submitFormHandler = (event) => {
    event.preventDefault()
    console.log(isFormValid);
    props.onSubmit()
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
        <button disabled={!isFormValid} ype="submit">{props.submitButton}</button>
      </div>
    </form>
  );
};
export default Form;
