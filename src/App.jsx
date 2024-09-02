import { children, useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import About from './Components/About/About';
import Layout from './Components/Layout/Layout';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

let x =createBrowserRouter(
  [
    {
      path:"",
      element:<Layout/>,
      children:[
        {index:true ,element:<Home/>},
        {path:"about",element:<About/>},
        {path:"portfolio",element:<Portfolio/>},
        {path:"contact",element:<Contact/>},
      ],
    },
  ]);
function App() {
  return <RouterProvider router={x}></RouterProvider> 
}

export default App
