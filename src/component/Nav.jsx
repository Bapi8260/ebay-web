import React from 'react'
import './nav.css'
import {Link,useLocation} from 'react-router-dom'
import {Data} from './Data'
const Nav = ({setitem}) => {
  const location=useLocation();
  const select=(price1,price2)=>{
      let filterdata=Data.filter((c)=> c.price >= price1 && c.price<=price2);
      setitem(filterdata);
  }
  const type=(category)=>{
    let selectdata=Data.filter((d)=>d.type==category);
    setitem(selectdata);
  }
  return (
    <>
    {
      location.pathname=='/' &&(
        <nav className='navigation'>
        <ul>
          
            <li onClick={()=>type('mobile')}>Mobile</li>
           <li  onClick={()=>type('Tablet')}>Tablet</li>
           <li  onClick={()=>type('laptop')}>Laptop</li>
           <li  onClick={()=>type('watch')}>watch</li>
            <li onClick={()=>select(20000,30000)}>20k-30k</li>
            <li onClick={()=>select(30000,50000)}>30k-50k</li>
            <li onClick={()=>select(50000,70000)}>50k-70k</li>
            <li onClick={()=>select(70000,100000)}>70k-100k</li>
            <li onClick={()=>select(100000,150000)}>100k-150k</li>
            <li onClick={()=>select(150000,200000)}>150k-200k</li>
        </ul>
      </nav>
      )
    }
     
    </>
  )
}

export default Nav
