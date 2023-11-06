import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostUser from './Components/PostUser.jsx';
import DisplayUsers from './Components/DisplayUsers.jsx';
import UpdateData from './Components/UpdateData.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostUser></PostUser>,
  },
  {
    path: '/users',
    element: <DisplayUsers></DisplayUsers>,
    loader: ()=> fetch(`http://localhost:5000/users`)
  },
  {
    path: '/users/:id',
    element: <UpdateData></UpdateData>,
    loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
