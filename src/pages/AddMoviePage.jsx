import { useContext } from "react";
import AddMovie from "../components/AddMovie/AddMovie";
import MovieContext from "../store/MovieContext";

const AddMoviePage = () => {
  const ctx = useContext(MovieContext)
  console.log(ctx);

  const submitFormHandler = (response) => {
    ctx.addMovie(response)
  };
  return (
    <>
      <AddMovie onSubmit={submitFormHandler}/>
    </>
  );
};
export default AddMoviePage;
