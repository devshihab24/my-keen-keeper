import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'


const router = createBrowserRouter([{
  path: '/',
  element: <h2>This is home page</h2>
},
{
  path:'/about',
  element: <h2>This is about page</h2>
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
