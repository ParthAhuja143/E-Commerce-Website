import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Payment from './Payment'
import Orders from './Orders'
import Login from './Login'
import Search from './Search';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
import { AnimatePresence } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

toast.configure()

//API Public Key from stripe
const promise = loadStripe('pk_test_51I4s1tANj4aKf0Zp3kxlfsTzEa1ylQ1HPV4nqm4DhgWn9sR4t5GlYnGDQHxv7p9paSJh2zrHZTbquPK0skrH6bOn00HnYcZkvi')

function App() {

   const [state , dispatch] = useStateValue()

   useEffect(() => {

      
      //listener
      auth.onAuthStateChanged(authUser => {
        // console.log('user' , authUser)

         if(authUser){
            // if the user was logged in / the user was logged in
            dispatch({
              type: 'SET_USER' ,
              user : authUser
            })
         }
         else{
            //user was logged in 
            dispatch({
               type : 'SET_USER' ,
               user : null 
            })
         }
      })

   }, []) // only run once



  return (
    <Router> {/* Wrap in Router */}
    <div className="App">
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path = '/login'>
           <Login/>
        </Route>
        <Route exact path = '/checkout'>
        <Header/>
           <Checkout />
        </Route>
        <Route exact path = '/search'>
        <Header/>
           {state.search === '' ? <Home/> : <Search />}
        </Route>
         <Route exact path = '/payment'>
           <Header/>
           <Elements stripe = {promise}>
        <Payment/>
        </Elements>
        </Route>
        <Route exact path = '/orders'>
           <Header/>
           <Orders/>
        </Route>
        <Route exact path = '/'> {/* Put '/' at the end as it will always get picked up and other routes won't work*/}
        <Header/>
           <Home />
        </Route>
     </Switch>
     </AnimatePresence>
    </div>
    </Router>
  );
}

export default App;
