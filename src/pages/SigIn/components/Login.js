import React, { useState } from 'react'

export default function Login({handleLogin}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const tryLogin= ()=>{
        handleLogin(email, password);
    }
    return (
        <div>
             <form>
              
              <input
                type="email"
                placeholder="Endereço de e-mail"
                onChange={e => setEmail(e.target.value )}
              />
              <input
                type="password"
                placeholder="Senha"
                onChange={e => setPassword( e.target.value )}
              />

              <button type="button" onClick={tryLogin}>Login</button>
              <hr />
              <a href="/">Fazer login</a>
            </form>
        </div>
    )
}
