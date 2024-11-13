import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Sobre from './routes/Sobre.jsx'
import Login from './routes/Login.jsx'
import Solucao from './routes/Solucao.jsx'
import Cadastrar from './routes/Cadastrar.jsx'
import Dashboard from './routes/Dashboard.jsx'


const router =createBrowserRouter([{
   path:'/',element:<App/>,
   errorElement:<Error/>,

   children:[
    {path:'/',element:<Home/>},
    {path:'/login',element:<Login/>},
    {path:'/sobre',element:<Sobre/>},
    {path:'/solucao',element:<Solucao/>},
    {path:'/cadastrar',element:<Cadastrar/>},
    {path:'/dashboard',element:<Dashboard/>},
   ]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router}/>
  </StrictMode>,
)
