import React, { useState } from 'react'
import AlreadyLogged from './components/AlreadyLogged'
import Login from './components/Login'

export default function SignIn({user, handleLogin}) {

    return (
        user.email !== "" ? <AlreadyLogged name={user.name} /> : <Login handleLogin={handleLogin}/>
        
    )
}
