import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layout/MainLayout.jsx'
import Home from './componets/Home.jsx'
import AddCoffee from './Pages/AddCoffee.jsx'

const Router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/coffees'),
        Component:Home
      },
      {
        path: 'addCoffee',
        Component:AddCoffee
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={Router}></RouterProvider>
  </StrictMode>,
)
