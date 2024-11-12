import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error/Error.jsx'
import Home from './routes/Home/Home.jsx'
import Sobre from './routes/Sobre.jsx'
import Login from './routes/Login.jsx'
import Solução from './routes/Solução.jsx'
import Cadastrar from './routes/Cadastrar.jsx'
import './index.css'


const router =createBrowserRouter([{
   path:'/',element:<App/>,
   errorElement:<Error/>,

   children:[
    {path:'/',element:<Home/>},
    {path:'/login',element:<Login/>},
    {path:'/sobre',element:<Sobre/>},
    {path:'/solucao',element:<Solução/>},
    {path:'/cadastar',element:<Cadastrar/>},
   ]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router={router}/>
  </StrictMode>,
)
