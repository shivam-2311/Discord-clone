import React from 'react'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(err => { alert(err.message) })
    }
    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/60415153fea4767867265233_Microinfluencers%201140%20wide-64.png" alt="hello" />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
