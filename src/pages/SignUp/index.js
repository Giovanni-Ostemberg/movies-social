import React, { Children, Component, useState } from 'react'

export default function SignUp({createUser}){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [birthday, setBirthday] = useState("")
      
      
      const handleSignUp = e => {
        console.log("Test");
        createUser(name, password, birthday, email);
      };
    
        return (
          <div>
            <form>
              <input
                type="text"
                placeholder="Nome de usuário"
                onChange={e => setName( e.target.value )}
              />
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

<input
                type="date"
                placeholder="Dada de nascimento"
                onChange={e => setBirthday( e.target.value) }
              />
              <button type="button" onClick={handleSignUp}>Cadastrar</button>
              <hr />
              <a href="/">Fazer login</a>
            </form>
          </div>
        );
      }

