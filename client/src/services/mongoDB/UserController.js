// import express from 'express'
import mongoose from "mongoose";
import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();
const { BASE_URL } = process.env;

export let user = {
  name: "",
  email: "",
  birthday: "",
};

// Função que adiciona um novo usuário ao banco de dados
export function handleCreateUser(name, password, birthday, email) {
  axios
    .post("http://localhost:3001/user", {
      name: name,
      email: email,
      birthday: birthday,
      password: password,
    })
    .then(console.log(process.env));
}

export async function handleLogin(email, password) {
  const login = async () => {
    return await axios.post("http://localhost:3001/user/login", {
      email: email,
      password: password,
    });
  };

  const user = await login();

  console.log(user.token);

  return user;
}
