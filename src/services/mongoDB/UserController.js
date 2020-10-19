// import express from 'express'
<<<<<<< HEAD
// import mongoose from "mongoose";

// mongoose.connect(
//     "mongodb+srv://giovanni:COqyF6x3VJP3aRYH@clustergiovanni.xrxse.mongodb.net/movies-social?retryWrites=true&w=majority",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(console.log("Conectado"))
//   .catch((err) => {
//     console.log("Erro ao conectar: " + err);
//   });



// // Função que adiciona um novo usuário ao banco de dados
// export function handleCreateUser(){

// }

=======
import mongoose from "mongoose";
import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();
const {BASE_URL} = process.env;

export let user = {
    name:"",
    email:"",
    birthday:""
}


// Função que adiciona um novo usuário ao banco de dados
export function handleCreateUser(name, password, birthday, email){
    axios.post('http://localhost:3001/user',{
        name:name,
        email:email,
        birthday:birthday,
        password:password
    }).then(console.log(process.env));
}



export async function handleLogin(email, password){
   const login = async () =>{ 
    return await axios.post('http://localhost:3001/user/login',{
    
        email: email,
        password: password

    })}

    const user = await login();

    console.log(user.token);
   
    return(user);

   
}
>>>>>>> operations/movies
