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
export async function handleCreateProfile(profile_name, email) {
  const newProfile = await axios
    .post("http://localhost:3001/profile", {
      user_email: email,
      profile_name: profile_name,
      watch_later: [],
      watched: [],
    })
    .then(console.log(process.env));

  return newProfile;
}

export async function handleChangeProfile(email, name) {
  const login = async () => {
    console.log(email);
    return await axios.get(
      `http://localhost:3001/profile?user_email=${email}&profile_name=${name}`
    );
  };

  const user = await login();

  console.log(user.data);

  return user.data;
}

export async function getAllProfiles(email) {
  const profiles = async () => {
    return await axios.get(`http://localhost:3001/profiles?email=${email}`);
  };

  const allProfiles = await profiles();
  return allProfiles.data;
}
