import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1 >Menu</h1>,
    children: [
      {
        path: '/home',
        index: true,
        element: <h1>Home</h1>
      },
      {
        path: '/group',
        element: <h1>Contact</h1>
      },
      {
        path: '/event',
        element: <h1>Events</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <RouterProvider router={router} />
  </StrictMode>
)
