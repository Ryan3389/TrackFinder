import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import HomePage from './pages/HomePage.jsx'
import MusicPage from './pages/MusicPage.jsx'
import SearchPage from './pages/SearchPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Error, something went wrong</h1>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/music',
        element: <MusicPage />
      },
      {
        path: '/search',
        element: <SearchPage />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
