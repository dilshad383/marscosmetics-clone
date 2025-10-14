import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import SignIn from './pages/SignIn'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { path: "", element: <Home/>},
      { path: "/signin", element: <SignIn/>}
    ]
  },
])
function App() {
  return <RouterProvider router={router}/>
}

export default App
