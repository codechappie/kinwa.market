import React from 'react';
import { useDispatch } from 'react-redux'
import { startLoginEmailPassword } from '../actions/auth';

const LoginPage = () => {
    
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(startLoginEmailPassword('123', 'Angel'))
        // history.replace('/tienda')
    }
    return (
        <div>
            <h1>Ingresar</h1>
            <hr/>
            <button onClick={handleLogin}>Ingresar</button>
        </div>
    )
}

export default LoginPage
