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
              />
              <input
                type="email"
                placeholder="Endereço de e-mail"
                onChange={e => this.setState({ email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Senha"
                onChange={e => this.setState({ password: e.target.value })}
              />
              <button type="submit">Cadastrar grátis</button>
              <hr />
              <a href="/">Fazer login</a>
            </form>
          </div>
        );
      }
}
