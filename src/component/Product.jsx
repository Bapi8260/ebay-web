import React from 'react'
import './product.css'
import"/node_modules/bootstrap/dist/css/bootstrap.min.css";
import"/node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import {Link} from 'react-router-dom'


const Product = ({data}) => {
  return (
    <div>
       <div className='container'>
        <div className='row'>
            {
       data.map((p)=>{
        return(
            <>
            <div className="col">
        <div className="card mt-50">
<img src={p.src} className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title">{p.name}</h5>
<p className="card-text">
  {p.price}
</p>

 <Link to={`/product/${p.id}`}><span className="btn btn-primary detail"> Details</span></Link>

</div>
</div>
</div>
</>
        )
        
    })
}
    </div>
    </div></div>
  )}

export default Product
