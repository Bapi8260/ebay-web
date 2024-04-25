import React from 'react'
import"/node_modules/bootstrap/dist/css/bootstrap.min.css";
import"/node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from 'react-router-dom'

import './cart.css'
const Cart = ({item,setcart}) => {
  
  return (
    <>
    {
      item.length==0 ? ( <>
      <div className='page1'>
        <p className='text1'> You did not select any product</p>
        <Link to="/"><button className='button2'>continue shopping</button></Link>
        </div>
        </>
    ):(<div>
        
      {item.map((b)=>{
      return(
        
    <div  className="card1 mb-3" >
<div className="row g-0">
  <div className="col-md-4">
  
    <img src={b.src} className="img-fluid rounded-start" alt="..." />
    
  </div>
  <div className="col-md-8">
    <div className="card-body1" >
      <h5 className="card-title1" >{b.name}</h5>
     
      <p className="card-text">
        <span className='price1'>{b.price}</span>
      </p>
    </div>
  </div>
</div>
</div>

      )
  })}
 
  <button className='button1' onClick={()=>setcart("")}>Remove All</button>
  </div>)
    }
    
    </>
   
  )
}


export default Cart
