import React from "react"
import './Product.css'
import { useStateValue } from "./StateProvider"

function Product(props){

    const [{} , dispatch ] = useStateValue()
    //console.log(state)

const addToBasket = () => {

    //dispatching an action (item into datalayer)
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

    return(
        <div className = 'product'>
            <div className = 'product_info'>
                <p className = 'product_title'>{props.title}</p>
                <p className = 'product_price'>
                  <small>Rs </small>
                  <strong>{props.price}</strong>
                </p>
                <div className = 'product_rating'>
                   {Array(props.rating).fill().map(() => (
                      <p>⭐</p>
                   ))}
                   
                </div>
            </div>
            <img src={props.image} alt = ''></img>
            <button onClick = {addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product