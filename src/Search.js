import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import './Search.css'
import SearchProduct from './SearchProduct'
import { useStateValue } from './StateProvider'

const product = [
    { id : '1' ,
      title : "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" ,
      price : 1000 ,
      image : 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg',
      rating : 5
    } , 
    {
     id : '2',  
     title : 'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl',
     price : 5000,
     rating : 4 ,
     image : 'https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg',
    },
    {
        id : '3'  ,
        title :'Fitbit FB507BKBK Versa 2 Health & Fitness Smartwatch with Heart Rate, Music, Alexa'  ,
        price :  13000  ,
        rating : 5  ,
        image :  'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'   ,
    } ,
    {
        id : '4'  ,
        title : "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"  ,
        price :  24000  ,
        rating : 3  ,
        image : 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'    ,
    } ,
    {
        id : '5'  ,
        title :  "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" ,
        price :  40000  ,
        rating :2,
        image : 'https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'    ,
    } ,
    {
        id : '6'  ,
        title : "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"  ,
        price :  120000 ,
        rating : 4  ,
        image :  'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'   ,
    } ,
    {
        id : '7'  ,
        title : "2019 Huion Inspiroy H1161 Graphics Drawing Tablet"  ,
        price : 20000   ,
        rating :  4 ,
        image :  'https://m.media-amazon.com/images/I/61S2iVA658L._AC_UY218_.jpg'   ,
    } ,
    {
        id : '8'  ,
        title :  "Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Silver" ,
        price :  100000  ,
        rating : 5  ,
        image :  'https://m.media-amazon.com/images/I/71UItVa0VmL._AC_UY218_.jpg'   ,
    } ,
    {
        id : '9'  ,
        title : "Hanes Men’s 12-Pack FreshIQ Odor Protection Crew Socks"  ,
        price :  100  ,
        rating : 4  ,
        image :  'https://m.media-amazon.com/images/I/91-HKGkBLhL._AC_UL320_.jpg'   ,
    } ,
    {
        id : '10'  ,
        title : "AmazonBasics Shockproof/Waterproof Bluetooth Wireless Mini Speaker Enjoy crystal-clear high-def sound and robust bass indoors or outdoors. Shop Now"  ,
        price :   1000 ,
        rating :  4 ,
        image :  'https://images-na.ssl-images-amazon.com/images/I/61eAMEqFhxL._AC_SL1500_.jpg'   ,
    } ,
    {
        id : '11'  ,
        title : "The Code of the Extraordinary Mind: 10 Unconventional Laws to Redefine Your Life and Succeed on Your Own Terms" ,
        price :  1000  ,
        rating :  4 ,
        image :   'https://m.media-amazon.com/images/I/81fjdAul8TL._AC_UY218_.jpg' ,
    } ,
]

function Search() {

    const [state , dispatch] =useStateValue()

    const notify = () => {
        
        toast.success('Item Added Successfully' , {position: toast.POSITION.BOTTOM_RIGHT})
    }

    return (
        <div className="search">
            <h3>{state.search === '' ? 'Displaying all products' : `Displaying results for '${state.search}'.`}</h3>
             <ToastContainer/>
            {product.map((item , i) => {
                if(item.title.toLowerCase().includes(state.search.toLowerCase()) === true){
                  
                   return <SearchProduct notify = {notify} title = {item.title} image = {item.image} rating = {item.rating} price = {item.price} id = {item.id} />
                }
                else {
                    return null 
                }
            } )}
        </div>
    )
}

export default Search
