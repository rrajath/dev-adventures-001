import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getMovie } from '../utils/movies';

export function loader({ params }) {
  const movie = getMovie(params.movieId);
  return movie;
}

export default function MoviePage() {
  const movie: any = useLoaderData();
  return (
    <div>
      <h1>Movie Page</h1>
      {movie.title}
    </div>
  );
}
