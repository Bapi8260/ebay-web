import React, { useEffect,useState } from 'react'
import Product from './Product'
import {useParams} from 'react-router-dom'
import {Data} from './Data'
const Search = () => {
    const {name}=useParams();
    const [element,setElement]=useState([]);
    useEffect(()=>{
       let searchelement=Data.filter((b)=> b.name.toLowerCase().includes(name.toLowerCase()));
       setElement(searchelement);
    },[name])
  return (
    <Product data={element}/>
  )
}

export default Search
