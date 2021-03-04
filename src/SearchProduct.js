import React from 'react'
import { useStateValue } from './StateProvider'
import './SearchProduct.css'

function SearchProduct(props) {

    const [state ,dispatch ] = useStateValue()

    const addToBasket = () => {
         dispatch({
            type : 'ADD_TO_BASKET' , 
            item : {
                id : props.id ,
                image : props.image ,
                price : props.price ,
                rating : props.rating ,
                title : props.title
            }
         })

         props.notify()
    }

    return (
        <div>
             <div className = 'searchProduct'>
          <img className = 'searchProduct_image' src = {props.image} />
          <div className = 'searchProduct_info'>
             <p className = 'searchProduct_title'>{props.title}</p>
             <p className = 'searchProduct_price'>
                 <small>Rs </small>
                 <strong>{props.price}</strong>
            </p>
            <div className = 'searchProduct_rating'>
                {Array(props.rating).fill().map(() => (<p>⭐</p>))}
            </div>
           {!props.hideButton && <button onClick ={addToBasket}>Add to Basket</button>}
          </div>
        </div>
        </div>
    )
}

export default SearchProduct
