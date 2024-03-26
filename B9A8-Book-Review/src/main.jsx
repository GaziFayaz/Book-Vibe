import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
      },
      {
        path:"/listed-books",
        element: <ListedBooks></ListedBooks>
      },
      {
        path:"/pages-to-read",
        element: <PagesToRead></PagesToRead>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
