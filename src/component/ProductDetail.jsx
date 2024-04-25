import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import Product from './Product'
import {Data} from './Data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'
import './productdetails.css'

const ProductDetail = ({cart,setcart}) => {
    const {id}=useParams();
    const [click,setClick]=useState({});
    const [related,setRelated]=useState([]);
    useEffect(()=>{
        const item=Data.filter((p)=> p.id==id);
        setClick(item[0]);
        const category=Data.filter((a)=> a.type==item[0].type);
        setRelated(category);
    },[id])
    const cartclick=(name,price,description,src)=>{
      const arr={name,price,description,src};
      setcart([...cart,arr])
      toast.success('Added successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
        });
    }
  return (
    <>
    <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    <div className='box'>
        <div className='image'>
        <img src={click.src} className='boximg'/>
        </div>
        <div className='content' >
            <span className='boxname'>{click.name}</span>
            <span className='boxprice'>{click.price}</span>
            <span className='boxspec'>specification:{click.description}</span>
            <div className='button0' >
            <button className='boxadd' onClick={()=> cartclick(click.name,click.price,click.description,click.src)} >Add to Cart</button>
       <Link to={`/buy/${click.id}`}><button className='boxbuy'>Buy now</button></Link>
            </div>
        </div>
       
    </div>
    <h2 className='related'>Related <span style={{color:"blue",textDecoration:"underline"}}>Product</span></h2>
    <Product data={related}/>
    </>
  )
}

export default ProductDetail
