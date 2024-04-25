
import React,{useState,useEffect} from 'react'
import Nav from './component/Nav'
import Header from './component/Header'
import Product from './component/Product'
import ProductDetail from './component/ProductDetail'
import {Data} from './component/Data'
import Search from './component/Search'
import Cart from './component/Cart'
import Buy from './component/Buy'
import './index.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
const App = () => {
  const [item,setItem]=useState([...Data]);
  const [cart,setCart]=useState([]);
  return (
    <div>
      <BrowserRouter>
      <Header setitem={setItem} cart={cart}/>
      <Nav setitem={setItem}/>
      
      <Routes>
        <Route path="/" element={<Product data={item}/>} />
        <Route path="/product/:id" element={<ProductDetail cart={cart} setcart={setCart}/>} />
        <Route path="/search/:name" element={<Search/>} />
        <Route path="/cart" element={<Cart item={cart} setcart={setCart}/>} />
        <Route path="/buy/:id" element={<Buy/>} />
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
