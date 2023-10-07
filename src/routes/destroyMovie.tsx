import { redirect } from "react-router-dom";
import { deleteMovie } from "../utils/movies";

export function action({ params }) {
  deleteMovie(params.movieId);
  return redirect('/');
}