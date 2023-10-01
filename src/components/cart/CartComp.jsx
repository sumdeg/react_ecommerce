import React from 'react'
import { removeFromCart } from '../../redux/cartSlice'
import { useDispatch } from 'react-redux'

const CartComp = ({cart}) => {
  const dispatch=useDispatch()

  return (
    <div className='my-5 mt-10 flex items-center justify-between'>
      <img className='w-[150px] h-[150px] object-contain' src={cart?.image} alt="" />
      <div className='w-[400px]'>
        <div className='text-xl'>{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div className='font-bold text-2xl'>{cart?.price} $ ({cart?.quantity})</div>
      <div onClick={()=> dispatch(removeFromCart(cart?.id))} className='bg-red-500 text-white w-[150px] text-xl cursor-pointer rounded-md h-12 flex items-center justify-center'>Ürünü Sil</div>
    </div>
  )
}

export default CartComp