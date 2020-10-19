<<<<<<< HEAD
import React, { Component } from 'react'

export default class SignUp extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        error: ""
      };

      
      
      handleSignUp = e => {
        const {getAllUsers} = this.props;
        console.log(getAllUsers());
      };
    
      render() {
        return (
          <div>
            <form onSubmit={this.handleSignUp}>
              {this.state.error && <p>{this.state.error}</p>}
              <input
                type="text"
                placeholder="Nome de usuário"
                onChange={e => this.setState({ username: e.target.value })}
=======
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
>>>>>>> operations/movies
              />
              <input
                type="email"
                placeholder="Endereço de e-mail"
<<<<<<< HEAD
                onChange={e => this.setState({ email: e.target.value })}
=======
                onChange={e => setEmail(e.target.value )}
>>>>>>> operations/movies
              />
              <input
                type="password"
                placeholder="Senha"
<<<<<<< HEAD
                onChange={e => this.setState({ password: e.target.value })}
              />
              <button type="submit">Cadastrar grátis</button>
=======
                onChange={e => setPassword( e.target.value )}
              />

<input
                type="date"
                placeholder="Dada de nascimento"
                onChange={e => setBirthday( e.target.value) }
              />
              <button type="button" onClick={handleSignUp}>Cadastrar</button>
>>>>>>> operations/movies
              <hr />
              <a href="/">Fazer login</a>
            </form>
          </div>
        );
      }
<<<<<<< HEAD
}
=======

>>>>>>> operations/movies
