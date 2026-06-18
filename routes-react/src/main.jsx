import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Dashbord from "./components/Dashbord.jsx"
import DashbordHome from './components/DashbordHome.jsx'
import Profile from "./components/Profile.jsx"
import Setting from "./components/Setting.jsx"
import ProductsDetails from './components/ProductsDetails.jsx'
import Cart from './components/Cart.jsx'
import { useState } from 'react'


createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />

      <Route path='/dashbord' element={<Dashbord />}>
        <Route index element={<DashbordHome />} />
        <Route path='profile' element={<Profile />} />
        <Route path='setting' element={<Setting />} />


      </Route>
      < Route path='/product/:id' element={<ProductsDetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  </BrowserRouter>
)
