import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
const allRouters = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/about',
    element:<About/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={allRouters}/>
  </StrictMode>,
)
