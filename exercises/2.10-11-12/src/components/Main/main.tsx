import { StrictMode } from 'react'
import ReactDom from 'react-dom/client'
import App from '../App/App'
import MoviePage from '../MoviePage'
import CinemaPage from '../CinemaPage'
import HomePage from '../../HomePage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path: "",
        element: <HomePage/>,
      },
      {
        path: "cinema",
        element: <CinemaPage/>
      },
      {
        path: "movies",
        element: <MoviePage/>
      },
    ]
  }
])
ReactDom.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
