import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getMovies } from "../utils/movies";

export function loader() {
  return getMovies();
}
export default function Root() {
  const movies: any = useLoaderData();
  return (
    <>
      <h1>Hello World!</h1>
      <Link to="/movies/0">{movies[0].title}</Link>

      <hr/>

      <div>
        <Outlet/>
      </div>
    </>
  )
}