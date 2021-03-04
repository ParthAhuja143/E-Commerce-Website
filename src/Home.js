import React from 'react'
import image1 from './Images/image1.jpg'
import './Home.css'
import Product from './Product'
import { toast, ToastContainer } from 'react-toastify'
import { motion } from 'framer-motion'

function Home(){

   const notify = () => {
    toast.success('Item Added Successfully' , {position: toast.POSITION.BOTTOM_RIGHT})
 }

    return (
        <div className = 'home'>
            <ToastContainer/>
          <div className = 'home_container'>
                  <motion.img initial = {{opacity : 0.1}} animate = {{opacity : 1}} transition = {{duration : 0.5}} className = 'home_image' src = {image1} alt = 'image'/>  
          <div className = 'home_row'>
              <Product id = '1' notify = {notify}  title = "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price = {1000} image = 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg' rating = {5}/>
              <Product id = '2' notify = {notify} title = 'Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' price = {5000} rating = {4} image = 'https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'/>
          </div> 
          <div className = 'home_row'>
              <Product id = '3' notify = {notify} title  ='Fitbit FB507BKBK Versa 2 Health & Fitness Smartwatch with Heart Rate, Music, Alexa' price = {13000} image ='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg' rating = {5}/>
              <Product id = '4' notify = {notify} title = "Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" image = 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$' rating = {3} price = {24000}/>
              <Product id  ='5' notify = {notify} title = "New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" image = 'https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg' rating = {2} price = {40000}/>
          </div>
          <div className = 'home_row'>
             <Product id = '6' notify = {notify} title = "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" image = 'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg' rating = {4} price = {120000}/>
          </div>
          <div className = 'home_row'>
             <Product id = '7' notify = {notify} title = "2019 Huion Inspiroy H1161 Graphics Drawing Tablet" image = 'https://m.media-amazon.com/images/I/61S2iVA658L._AC_UY218_.jpg' rating = {4} price = {20000}/>
             <Product id = '8' notify = {notify} title = "Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Silver" rating = {5} price = {100000} image ="https://m.media-amazon.com/images/I/71UItVa0VmL._AC_UY218_.jpg"/>
             <Product id = '9' notify = {notify} title = "Hanes Men’s 12-Pack FreshIQ Odor Protection Crew Socks" image = 'https://m.media-amazon.com/images/I/91-HKGkBLhL._AC_UL320_.jpg' rating = {4} price = {100}/>   
          </div>
          <div className = 'home_row'>
          <Product id = '10' notify = {notify} title = "AmazonBasics Shockproof/Waterproof Bluetooth Wireless Mini Speaker Enjoy crystal-clear high-def sound and robust bass indoors or outdoors. Shop Now" image = 'https://images-na.ssl-images-amazon.com/images/I/61eAMEqFhxL._AC_SL1500_.jpg' rating = {4} price = {1000}/>     
             <Product id = '11' notify = {notify} title = "The Code of the Extraordinary Mind: 10 Unconventional Laws to Redefine Your Life and Succeed on Your Own Terms" image = 'https://m.media-amazon.com/images/I/81fjdAul8TL._AC_UY218_.jpg' rating = {4} price = {1000}/>
          </div>
          </div>
        </div>
    )
}

export default Home 