import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import {Data} from './Data'
import './buy.css'

const Buy = () => {
  const {id}=useParams();
  const [item,setItem]=useState([]);
  useEffect(()=>{
    const item=Data.filter((p)=> p.id==id);
    setItem(item[0]);
    
},[id])


const [select,setSelect]=useState();
let  value=item.price*select;
  



  return (
    <div>
      <div className='part'>
        <div className='part11'>
          <div className='image1'>
            <img src={item.src}></img>
          </div>
          <div className='content1'>
            <div className='title'>
          <p className='name'>{item.name}</p>
          <select id='selectlist' onChange={(a)=>setSelect(a.target.value)}>
            <option value="1">Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="9">9</option>
            <option value="10">10</option>

          </select>
          </div>
          <p className='des'>{item.description}</p>
          <p className='pre'>Price:{item.price}</p>
          </div>
        </div>
        <div className='part12'>
          <div className='price'>
          <div className='line1'><span>PRODUCT DETAILS</span><span>{select} Item</span></div>
         <div className='line1'><span>Total MRP</span><span>{value}</span></div>
         <div className='line1'><span>Discount MRP</span><span style={{color:"green"}}>0</span></div>
         <div className='line1'><span>Coupon Fee</span><span style={{color:"green"}}>0</span></div>
         <div className='line1'><span>Platform Fee</span><span style={{color:"green"}}>0</span></div>
         <div className='line1'><span>Shiping Fee</span><span style={{color:"green"}}>Free</span></div>
         <hr></hr>
         <div className='line1'><span>Total Amount</span><span>{value}</span></div>
         <button>PLACE ORDER</button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Buy
