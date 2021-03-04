import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
import { motion } from 'framer-motion'

function Header(){

    const [state , dispatch] = useStateValue()
    const [searchTerm , setSearchTerm] = useState('')

    const handleAuthentication = () => {
        if(state.user){
            dispatch({
                type : 'EMPTY_BASKET'
            })
            auth.signOut()
        }
    }

    const handleChange = (event) => {
       setSearchTerm(event.target.value)
    }

    const handleSearch = () => {
        dispatch({
          type : 'Search' , 
          search : searchTerm
        })
    }

return(
   
        <motion.div className = 'header' initial = {{y : -100}} animate = {{y : 0}}  exit = {{y : -100}} transition = {{ type: "spring", stiffness: 100 ,duration: 5 ,ease : [0.43 ,0.13 ,0.23 , 0.96]}}>
        <Link to = '/'>
        <motion.img className = 'header_logo' animate = {{scale: [0.8, 1, 0.8] }} transition = {{ repeat : Infinity , duration : 2 , delay : 1}} src = 'http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt = ''/>
        </Link>
     <div className = 'header_search'>    
             <motion.input 
             onChange = {handleChange}
              className = 'header_searchInput'
              type = 'text'
              placeholder = 'Search products ...'
              /> 
       <Link to = '/search' onClick = {handleSearch} className="header_link">
           <motion.div className="header_divIcon">
               <SearchIcon className = 'header_searchIcon'/>
            </motion.div>
        </Link>
     </div>
     <div className = 'header_nav'>
     <Link to = {!state.user && '/login'}> {/* If there is no user then only go to login page*/}
         <div onClick = {handleAuthentication} className = 'header_option'>
             <span className = 'header_optionLineOne'>Hello {!state.user ? 'Guest' : state.user.email}</span>
             <span className = 'header_optionLineTwo'>{state.user ? 'Sign Out' : 'Sign In'}</span>             
         </div>
    </Link>
    <Link to = '/orders'>
         <div className = 'header_option'>
             <span className = 'header_optionLineOne'>Returns</span>
             <span className = 'header_optionLineTwo'>& Orders</span>
         </div>
    </Link>
         <div className = 'header_option'>
             <span className = 'header_optionLineOne'>Your</span>
             <span className = 'header_optionLineTwo'>Prime</span>
         </div>
         <Link to = '/checkout'>
         <div className = 'header_optionBasket'>
             <ShoppingBasketIcon />
             <span className = 'header_optionLineTwo header_basketCount'>{state.basket?.length}</span>
         </div>
         </Link>
     </div>
    </motion.div>

)

}

export default Header