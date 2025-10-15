import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import About from './pages/About'
import BestSellers from './pages/BestSellers'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { path: "", element: <Home/>},
      { path: "/about", element: <About/>},
      { path: "/bestsellers", element: <BestSellers/>},
      { path: "/signin", element: <SignIn/>},
    ]
  },
])
function App() {
  return <RouterProvider router={router}/>
}

export default App
