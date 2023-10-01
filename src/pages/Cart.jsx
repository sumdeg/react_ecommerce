import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CartComp from '../components/cart/CartComp'
import { getCartTotal } from '../redux/cartSlice'

const Cart = () => {
  const navigate=-useNavigate()
  const dispatch=useDispatch()
  const {carts,totalAmount,itemCount}=useSelector(state=>state.carts)

  console.log(carts,"carts")
  useEffect(() => {
      dispatch(getCartTotal())
  }, [dispatch])
  
  return (
    <div>
        {
            carts?.length > 0 ? 
            <div>
                {
                    carts?.map((cart,i)=>(
                        <CartComp key={i} cart={cart}/>
                    ))
                }
                <div className='flex items-center justify-end text-2xl mb-4'>TOPLAM TUTAR: <span className='font-bold ml-2'> {totalAmount.toFixed(2)} $</span></div>
            </div> : 
            <div>
                Sepetiniz boş
            </div>
        }
    </div>
  )
}

export default Cart