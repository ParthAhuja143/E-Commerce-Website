import './CheckoutProduct.css'
import React, { forwardRef, useState } from 'react'
import { useStateValue } from './StateProvider'


const CheckoutProduct = forwardRef((props ,ref) => {

    const [state , dispatch] = useStateValue()


    const removeFromBasket = () => {

         dispatch({
             type : 'REMOVE_FROM_BASKET' ,
             id : props.id
         })

        props.removeNotify()
    }

    return (
        <div className = 'checkoutProduct' ref = {ref}>
          <img className = 'checkoutProduct_image' src = {props.image} />
          <div className = 'checkoutProduct_info'>
             <p className = 'checkoutProduct_title'>{props.title}</p>
             <p className = 'checkoutProduct_price'>
                 <small>Rs </small>
                 <strong>{props.price}</strong>
            </p>
            <div className = 'checkoutProduct_rating'>
                {Array(props.rating).fill().map(() => (<p>⭐</p>))}
            </div>
            <button onClick ={removeFromBasket}>Remove from Basket</button>
          </div>
        </div>
    )
})

export default CheckoutProduct