import Form from "../UI/Form/Form"
import useInput from "../../hooks/useInput";

const MovieSearch = (props) => {
    
  const fieldInput = useInput((value) => value !== "");
    const formFieldList = [
        {
          id: 1,
          static: {
            label: "Search by Name or Genre or Language",
            input: {
              type: "text",
              placeholder: "Movie Name or Genre or Language",
            },
            errorMsg: "Enter Movie Name or Genre or Language",
          },
          action: fieldInput,
        }
    ]
    const submitFormHandler = () => {
        props.onSearch(formFieldList[0].action.value)
    }
    return (
        <Form fieldList={formFieldList} submitButton="Search" onSubmit={submitFormHandler} />
    )
}
export default MovieSearch