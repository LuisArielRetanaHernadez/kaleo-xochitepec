import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// layout
import Menu from './layouts/Menu/Menu.layout'
import Home from './pages/Home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />
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
