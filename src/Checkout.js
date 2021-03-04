import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import FlipMove from 'react-flip-move'
import { toast, ToastContainer } from 'react-toastify'

function Checkout(){

    const [state , dispatch] = useStateValue()

   const removeNotify = () => {
     toast.success('Item removed Successfully' , {position: toast.POSITION.BOTTOM_RIGHT})
   }

    return(
        <div className = 'checkout'>
          <ToastContainer/>
            <div className = 'checkout_left'>
                <img className = 'checkout_ad' src = 'https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt = ''></img>
                <div>
                    <h3>Hello, {state.user? state.user.email : 'Guest'}</h3>
                <h2 className = 'checkout_title'>
                    Your shopping basket {state.basket.length == 0 && 'is empty'}
                </h2>
               <FlipMove  staggerDelayBy={20}
          enterAnimation={{
            from: {
              transform: "rotateX(180deg)",
              opacity: 0.1
            },
            to: {
              transform: ""
            }
          }}
          leaveAnimation={{
            from: {
              transform: ""
            },
            to: {
              transform: "rotateX(-120deg)",
              opacity: 0.1
            }
          }}>
                {state.basket.map(items => (
                    <CheckoutProduct removeNotify = {removeNotify} id = {items.id} title = {items.title} price = {items.price} image = {items.image} rating = {items.rating}/>
                ))}
                </FlipMove>
                </div>
            </div>
            <div className = 'checkout_right'>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout