import { redirect } from "react-router-dom";
import { favoriteMovie } from "../utils/movies";

export function action({ params }) {
  favoriteMovie(params.movieId);
  return redirect(`/movies/${params.movieId}`);
}