import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import Serie from './Serie'
import Movie from './Movie'
import NoFound from './NoFound';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppRouter = createBrowserRouter([
    {
        path: '/ApdFlix',
        element: <Home />
    },
    {
        path: 'ApdFlix/miguelSeries',
        element: <App user="miguelSeries" />
    },
    {
        path: 'ApdFlix/apdSeries',
        element: <App user="apdSeries" />
    },
    {
        path: 'ApdFlix/apdMovies',
        element: <App user="apdMovies" />
    },
    {
        path: 'ApdFlix/apdMovies/:movieName',
        element: <Movie />
    },
    {
        path: 'ApdFlix/:userName/:serieName',
        element: <Serie />
    },
    {
        path: '*',
        element: <NoFound />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={AppRouter} />
);

