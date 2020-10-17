import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter as routes } from "./routes/routes.js";
import path from "path";
import dotenv from "dotenv";
import { UserModel } from "./models/UserModel.js";

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
    message:
      "Bem-vindo à API de usuários. Acesse /users e siga as orientações",
  });
});

/**
 * Rotas principais do app
 */
app.route("/api/users", routes);

app.route("/users/")
.get(async (req,res)=>{
  try {
    
    const user = await UserModel.find({});
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
    
  }
})
.post((req, res)=>{
  // Chamada de criação de um novo usuário

})

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
