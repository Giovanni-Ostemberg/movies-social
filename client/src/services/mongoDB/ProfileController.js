// import express from 'express'
import mongoose from "mongoose";
import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();
const { BASE_URL } = process.env;

export let profile = {
  name: "",
  email: "",
  watch_later: [],
  watched: [],
};

// Função que adiciona um novo usuário ao banco de dados
export function handleCreateProfile(profile_name, email) {
  axios
    .post("http://localhost:3001/profile", {
      user_email: email,
      profile_name: profile_name,
      watch_later: [],
      watched: [],
    })
    .then(console.log(process.env));
}

export async function handleChangeProfile(email, password) {
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
