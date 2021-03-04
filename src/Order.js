import moment from 'moment'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import SearchProduct from './SearchProduct'
import './Order.css'

function Order({order}) {
    return (
        <div className = 'order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
            <p className = 'order_id'>
                <small>{order.id}</small>
                </p>
                {order.data.basket?.map(item => (
                     <SearchProduct hideButton = {true} title = {item.title} image = {item.image} rating = {item.rating} price = {item.price} id = {item.id}/>
                ))}
                <CurrencyFormat 
                renderText = {(value) => (
                    <>
                    <h3 className = 'order_total'>Order Total : {value}</h3>
                    </>
                )}
                decimalScale = {2}
                value = {order.data.amount/100}
                displayType = {'text'}
                thousaandSeparator = {true}
                prefix = {'Rs '}
                />
        </div>
    )
}

export default Order
