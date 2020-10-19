import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
import { UserModel } from "./models/UserModel.js";
import { ProfileModel } from "./models/ProfileModel.js";

// import {authMiddleware} from "../app/client/src/services/auth";

/**
 * Faz a leitura do arquivo
 * ".env" por padrão
 */

dotenv.config();

const app = express();
const __dirname = path.resolve();
app.use(cors());
app.use(express.json());

/**
 * Vinculando o React ao app
 */
app.use(express.static(path.join(__dirname, "client/build")));

/**
 * Rota raiz
 */
app.get("/api/", (_, response) => {
  response.send({
    message: "Bem-vindo à API de usuários. Acesse /users e siga as orientações",
  });
});

/**
 * Rotas principais do app
 */

app
  .route("/user/")
  // chamada para recuperar dados existentes
  .get(async (req, res) => {
    try {
      const user = await UserModel.find({});
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  })
  .post(async (req, res) => {
    // Chamada de criação de um novo usuário
    try {
      const existsEmail = await UserModel.find({ email: req.body.email });

      if (existsEmail.length !== 0) {
        res.send("Email já existente");
      } else {
        console.log("Criando novo usuário");
        const user = new UserModel(req.body);
        await user.save();
        const defaultProfile = new ProfileModel({
          profile_name: user.name,
          user_email: user.email,
          watch_later: [],
          watched: [],
        });
        await defaultProfile.save();
        res.send("Usuario " + user.name + " salvo com sucesso!");
      }
    } catch (e) {
      res.send(
        "Não foi possível realizar o cadastro, por favor, revise os dados e tente novamente." +
          e
      );
    }
  });

app
  .route("/profile")
  .post(async (req, res) => {
    try {
      const profile = await ProfileModel.findOne({
        user_email: req.body.email,
        profile_name: req.body.name,
      });
      if (profile.length !== 0) {
        res.send("O nome de perfil já existe, por favor, escolha outro");
      } else {
        const newProfile = new ProfileModel(req.body);
        await profile.save();
        res.send("Perfil criado com sucesso!");
      }
    } catch (error) {
      res.send(
        "Não foi possível criar o perfil, por favor, revise os dados e tente novamente."
      );
    }
  })
  .get(async (req, res) => {
    try {
      const profiles = await ProfileModel.find({ user_email: req.query.email });
      res.send(profiles);
    } catch (error) {
      res.send("Não existem perfis criados para esta conta");
    }
  });

app.post("/user/login/", async (req, res) => {
  console.log("Tentanto logar");

  const user = await UserModel.findOne({ email });

  try {
    console.log(req.body);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    if (!(await user.compareHash(password))) {
      return res.status(400).json({ error: "Invalid password" });
    }
    return res.json({
      user,
      token: user.generateToken(),
    });
  } catch (error) {
    return res.status(400).json({ error: "User authentication failed" });
  }
});

/**
 * Conexão ao Banco de Dados
 */
const { DB_CONNECTION } = process.env;
let connectedToMongoDB = false;

console.log("Iniciando conexão ao MongoDB...");
mongoose.connect(
  DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      connectedToMongoDB = false;
      console.error(`Erro na conexão ao MongoDB - ${err}`);
    }
  }
);

const { connection } = mongoose;

connection.once("open", () => {
  connectedToMongoDB = true;
  console.log("Conectado ao MongoDB");

  /**
   * Definição de porta e
   * inicialização do app
   */
  const APP_PORT = process.env.PORT || 3001;
  app.listen(APP_PORT, () => {
    console.log(`Servidor iniciado na porta ${APP_PORT}`);
  });
});
