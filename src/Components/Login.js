import React, { useState } from 'react'
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from '../Firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        // login logic
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // logged in successfully
                history.push('/');
            })
            .catch(e => alert(e.message));
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // created a user and logged in..mm redirect
                history.push('/');
            })
            .catch(e => alert(e.message));
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.png"
                    alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>Email</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="text" name="" id=""/>
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" name="" id=""/>
                    <button onClick = {login} type="submit" className="login__signInButton">Sign In</button>
                    <br />
                    <button onClick = {register} className="login__registerButton">Create your Amazon account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
