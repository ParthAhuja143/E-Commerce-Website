import React, { useState } from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { auth } from './firebase'
import { useStateValue } from './StateProvider'

function Login() {

    const history = useHistory()

    const [state , dispatch] = useStateValue()

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()  // Doesnt refresh

        dispatch({
            type : 'EMPTY_BASKET'
        })

        auth.signInWithEmailAndPassword(email ,password)
        .then( auth => {
           history.push('/')
        })
        .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault()

        dispatch({
            type : 'EMPTY_BASKET'
        })

        //FIREBASE
        auth.createUserWithEmailAndPassword(email , password)
        .then((auth) => {
            //if user is created 
            // redirect to home page 
            if(auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className = 'login'>
            <Link to ='/'>
            <img className = 'login_logo' src = 'https://miro.medium.com/max/396/0*bVnfVVG7Y7qXQcO1' alt = 'Amazon Logo'/>
            </Link>
            <div className='login_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5> <input type = 'text' value = {email} onChange = {event => setEmail(event.target.value)}/>
                    <h5>Password</h5> <input type = 'password' value = {password} onChange = {event => setPassword(event.target.value)} />
                    <button type = 'submit' className = 'login_signInButton' onClick = {signIn}>Sign In</button> 
                    <p>By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale . Please see our Privacy Notice , our Cookies Notice and our Interest-Based Ads Notice.</p>
                    <button onClick ={register} className = 'login_registerButton'>Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
