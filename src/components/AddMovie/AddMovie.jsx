import useInput from "../../hooks/useInput";
import Form from "../UI/Form/Form";
//(name, description, cast, similar movies, genre, language
const FORM_FIELD_STATIC = {
  name: {
    label: "Movie Name",
    input: {
      type: "text",
      placeholder: "Movie Name",
    },
    errorMsg: "Enter Movie Name",
  },
  description: {
    label: "Movie Description",
    input: {
      type: "text",
      placeholder: "Movie Description",
    },
    errorMsg: "Enter Movie Description",
  },
  cast: {
    label: "Cast Name",
    input: {
      type: "text",
      placeholder: "Cast Name",
    },
    errorMsg: "Enter Cast Name",
  },
  similarMovies: {
    label: "Similar Movies",
    input: {
      type: "text",
      placeholder: "Similar Movies",
    },
    errorMsg: "Enter Similar Movies",
  },
  genre: {
    label: "Movie Genre",
    input: {
      type: "text",
      placeholder: "Movie Genre",
    },
    errorMsg: "Enter Movie Genre",
  },
  language: {
    label: "Movie Language",
    input: {
      type: "text",
      placeholder: "Movie Language",
    },
    errorMsg: "Enter Movie Language",
  },
};
const AddMovie = (props) => {
  const nameInput = useInput((value) => value !== "");
  const descriptionInput = useInput((value) => value !== "");
  const castInput = useInput((value) => value !== "");
  const similarMoviesInput = useInput((value) => value !== "");
  const genreInput = useInput((value) => value !== "");
  const languageInput = useInput((value) => value !== "");

  const formFieldList = [
    {
      id: 1,
      static: FORM_FIELD_STATIC.name,
      action: nameInput,
    },
    {
      id: 2,
      static: FORM_FIELD_STATIC.description,
      action: descriptionInput,
    },
    {
      id: 3,
      static: FORM_FIELD_STATIC.cast,
      action: castInput,
    },
    {
      id: 4,
      static: FORM_FIELD_STATIC.similarMovies,
      action: similarMoviesInput,
    },
    {
      id: 5,
      static: FORM_FIELD_STATIC.genre,
      action: genreInput,
    },
    {
      id: 6,
      static: FORM_FIELD_STATIC.language,
      action: languageInput,
    },
  ];

  const isFormValid = formFieldList.reduce(
    (validity, field) => validity && field.action.isValidData,
    true
  );
  const resetFormField = () => {
    formFieldList.forEach(field => {
      field.action.onResetHandler();
    })
  }
  const submitFormHandler = () => {
    console.log();
    console.log(isFormValid);
    console.log(formFieldList);
    props.onSubmit({
      name: formFieldList[0].action.value,
      description: formFieldList[1].action.value,
      cast: formFieldList[2].action.value,
      similarMovies: formFieldList[3].action.value,
      genre: formFieldList[4].action.value,
      language: formFieldList[5].action.value,
    });
    resetFormField();
  };
  return <Form fieldList={formFieldList} onSubmit={submitFormHandler} />;
};
export default AddMovie;
