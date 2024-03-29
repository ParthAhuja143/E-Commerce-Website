import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './StateProvider'
import {Link, useHistory} from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import axios from './axios'
import { db } from './firebase'

function Payment() {

    const history = useHistory()

    const removeNotify = () => {
        toast.success('Item removed Successfully' , {position: toast.POSITION.BOTTOM_RIGHT})
      }

    const [{basket , user} ,dispatch] = useStateValue()
    

    const stripe = useStripe()
    const elements = useElements()

    const [succeeded , setSucceeded] = useState(false)
    const [processing , setProcessing] = useState('')
    const [disabled , setDisabled] = useState(true)
    const [error , setError] = useState(null)
    const [clientSecret , setClientSecret] = useState(true)

    useEffect(() => {

        const getClientSecret = async () => {

            const response = await axios({
                method : 'post' ,
                //Stripe expects the total in currency sub-unit
                url : `/payment/create?total=${getBasketTotal(basket)*100}`
            })

            setClientSecret(response.data.clientSecret)
        }

        getClientSecret()

    } , [basket]) // runs when the basket changes

   // console.log('-------------------------',clientSecret)

    const handleSubmit = async (event) => { 
        
        event.preventDefault()
        setProcessing(true) // disable button on processing

        // clientSecret is the code for stripe to do transaction
        const payload = await stripe.confirmCardPayment(clientSecret , {
            payment_method : {
                card : elements.getElement(CardElement)
            }
        })
        .then(({paymentIntent}) => {

            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket : basket ,
                amount : paymentIntent.amount,
                created : paymentIntent.created
            })

            //paymentIntent = payment Confirmation code 
            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
                type : 'EMPTY_BASKET'
            })

            history.replace('/orders') // cant push as you dont want user to go back to payments page 
        }) 

    }

    const handleChange = (event) => {

        setDisabled(event.empty) // if event is empty disable the button
        setError(event.error ? event.error.message : '') // if there is error set error to error.message

    }

    return ( 
    < div className = 'payment' >
        <ToastContainer/>
        <div className = 'payment_container' >
            <h1>Checkout (<Link to = '/checkout'>{basket?.length} items</Link>)
            </h1>
            <div className = 'payment_section'>
                <div className = 'payment_title'>
                    <h3>Delivery Adress</h3>
                </div>
                <div className="payment_adress">
                    <p>{user?.email}</p>
                    <p>Dwarka, New Delhi</p>
                    <p>Delhi, India</p>
                </div>
            </div>
            <div className = 'payment_section'>
                <div className="payment_title">
                    <h3>Review Items and delivery</h3>
                </div>
                <div className="payment_items">
                    {basket.map(item => (
                        <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        removeNotify = {removeNotify}
                        />
                    ))}
                </div>
            </div>
            <div className = 'payment_section'>
                <div className = 'payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className = 'payment_details'>
                    <form onSubmit = {handleSubmit}>
                        <CardElement onChange = {handleChange}/>
                        <div className = 'payment_priceContainer'>
                            <CurrencyFormat renderText = {(value) => (
                                <>
                                  <h3>Order Total : {value}</h3>
                                </>
                            )}
                            decimalScale = {2}
                            value = {getBasketTotal(basket)}
                            displayType = {'text'}
                            thousandSeparator = {true}
                            prefix = {'Rs '}
                            />
                            <button disabled = {processing || disabled ||succeeded}>
                            <span>{processing ? <p>Processing ...</p> : 'Buy Now'}</span>
                            </button>
                        </div>
                        {/*Error*/}
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div> 
    </div>
    )
}

export default Payment