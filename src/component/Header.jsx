import React, {useEffect,useState} from 'react'
import"/node_modules/bootstrap/dist/css/bootstrap.min.css";
import"/node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import './header.css'
import {Data} from './Data'
const Header = ({setitem,cart}) => {
  const navigate=useNavigate();
  const [search,setSearch]=useState("");
  const result=(e)=>{
    e.preventDefault();
   navigate(`search/${search}`);
  }
  return (
    <div>
        <div className='header'>
      <div className='logo'>E-bay</div>
      <div className='search'>
        <form onSubmit={result}>
        <input type='search' placeholder='Enter product name' onChange={(p)=>setSearch(p.target.value)}/>
        </form>
      </div>
      <div className='cart'>
        <Link to={'/cart'}>
      <button type="button" class="btn btn-primary position-relative">
<FiShoppingCart/>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
</Link></div>

      <Link style={{textDecoration:"none"}} to={'/'}> <span className='button'  onClick={()=>setitem([...Data])}>Product</span></Link>
      </div>
    </div>
  )
}

export default Header
