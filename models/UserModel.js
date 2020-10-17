
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://GiOstemberg:Gi08011993@clustergiovanni.xrxse.mongodb.net/movies-social?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("Conectado Á Base de Dados"))
  .catch((err) => {
    console.log("Erro ao conectar: " + err);
  });

let schema = mongoose.Schema({
  name:String,
  email:String,
  birthday: Date,
  password: String,
});

const UserModel = mongoose.model("users", schema);

export { UserModel };