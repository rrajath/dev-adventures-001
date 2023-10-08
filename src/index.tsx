import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './routes/errorPage';
import MoviePage from './routes/movie';
import { loader as movieLoader } from './routes/movie';
import { loader as sidebarLoader } from './components/sidebar';
import { ChakraProvider } from '@chakra-ui/react';
import NewMovie from './routes/newMovie';
import { action as newMovieAction } from './routes/newMovie';
import { action as destroyMovieAction } from './routes/destroyMovie';
import { action as favoriteMovieAction } from './routes/favoriteMovie';
import { action as editMovieAction } from './routes/editMovie';
import IndexPage from './routes';
import EditMovie from './routes/editMovie';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: sidebarLoader,
    children: [
      {
        index: true,
        element: <IndexPage/>
      },
      {
        path: '/movies/:movieId',
        element: <MoviePage/>,
        loader: movieLoader,
      },
      {
        path: '/movies/new',
        element: <NewMovie/>,
        action: newMovieAction,
      },
      {
        path: '/movies/:movieId/edit',
        element: <EditMovie/>,
        loader: movieLoader,
        action: editMovieAction,
      },
      {
        path: '/movies/:movieId/destroy',
        action: destroyMovieAction,
      },
      {
        path: '/movies/:movieId/favorite',
        action: favoriteMovieAction,
      }
    ]
  }
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
