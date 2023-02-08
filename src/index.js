import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import Serie from './Serie'
import NoFound from './NoFound';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppRouter = createBrowserRouter([
    {
        path: '/ApdFlix',
        element: <Home />
    },
    {
        path: 'ApdFlix/:user',
        element: <App />
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

