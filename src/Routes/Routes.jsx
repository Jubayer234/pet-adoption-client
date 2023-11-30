import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Main from '../LayOut/Main';
import Home from '../Pages/Home/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import PetListing from '../Pages/PetListing/PetListing';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import DashBoard from '../DashBoard/DashBoard';
import DonationCampaign from '../Pages/DonationCampeign/DonationCampaign';
import Details from '../Pages/PetDetails/Details';
import PrivateRoute from '../Components/PrivateRoute/PrivateRoute';
import AddPet from '../DashBoard/AddPet/AddPet';
import AdoptionReq from '../DashBoard/AdoptionReq/AdoptionReq';

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
        path: '/donation',
        element: <DonationCampaign></DonationCampaign>

      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/pet')
      },
    ]
  },
  {
    path: 'dashBoard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      {
        path: 'addPet',
        element: <AddPet></AddPet>
      },
      {
        path: 'adoptionReq',
        element: <AdoptionReq></AdoptionReq>
      }
    ]
  }
]);

export default router