import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './components/Root.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Authprovider from './providers/Authprovider.jsx'
import Orders from './components/Orders.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import Profile from './components/Profile.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'orders',
        element:<PrivateRoute><Orders></Orders></PrivateRoute>
      },
      {
        path:'profile',
        element:<PrivateRoute> <Profile></Profile> </PrivateRoute>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(


  <StrictMode>

    <Authprovider>
        <RouterProvider router={router} />
    </Authprovider>
    
   
  </StrictMode>,
)
