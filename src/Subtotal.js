import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
import { useHistory } from 'react-router-dom'

function Subtotal(){

    const history = useHistory()  //gives browser history

    const [state , {}] = useStateValue()

    return(
        <div className = 'subtotal'>
           <CurrencyFormat renderText = {(value) => (
                <>
                <p>
                    Subtotal ({state.basket?.length} items): <strong> {value}</strong>
                </p>
                <small className = 'subtotal_gift'>
                    <input type = 'checkbox'/> This order contains a gift
                </small>
                </>
            )
           }
           decimalScale = {2}
           value = {getBasketTotal(state.basket)}
           displayType = {'text'}
           thousandSeparator = {true}
           prefix = {'Rs '}
           />
          {state.basket != 0 ?  <button onClick = {event => history.push('/payment')}>Proceed to checkout</button> :  <button onClick = {event => history.push('/')}>Add some items to cart</button>}
        </div>
    )
}

export default Subtotal 