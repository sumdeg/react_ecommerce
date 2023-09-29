import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productSlice'
import Loading from '../Loading'
import Product from './Product'

const Products = () => {
  const dispatch=useDispatch()
  const {products,productsStatus}=useSelector(state=>state.products)
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])
  return (
    <div>
      {
        productsStatus === "LOADING" ? <Loading/>:
      
        <div className='flex flex-wrap'>
          {
            products?.map((product,i) => (
              <Product key={i} product={product}/>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Products