import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Main from '../LayOut/Main';
import Home from '../Pages/Home/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import PetListing from '../Pages/PetListing/PetListing';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/Category.json')
        },
        {
          path: '/petListing',
          element: <PetListing></PetListing>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
  ]);

export default router