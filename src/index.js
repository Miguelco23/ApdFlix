import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import Serie from './Serie'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: 'miguel',
        element: <App user={"Miguel"}/>
    },
    {
        path: 'apd',
        element: <App user={"APD"}/>
    },
    {
        path: 'naruto',
        element: <Serie serie={"Naruto"}/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={AppRouter} />
);

