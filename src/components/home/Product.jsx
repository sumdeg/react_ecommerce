import React from 'react'

const Product = ({product}) => {
  return (
    <div className='w-[300px]  p-2 mb-2 mx-1 border rounded-md relative cursor-pointer'>
        <div className='text-2xl font-bold absolute rounded-md top-0 right-0 bg-gray-500 text-white p-2 m-1'>{product?.price} <span className='text-sm'>$</span></div>
        <img className='w-[150px] h-[150px] object-contain m-auto' src={product?.image} alt="" />
        <div className='text-center px-3 mt-3 text-xl font-bold'>{product?.title}</div>
    </div>
  )
}

export default Product