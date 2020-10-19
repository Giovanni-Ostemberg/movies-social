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
  profile_name: {
    type: String,
    unique: true,
    require: true,
  },
  user_email: {
    type: String,
    required: true,
    lowercase: true,
  },
  watch_later: {
    type: [],
  },
  watched: {
    type: [],
  },
});

const ProfileModel = mongoose.model("profiles", schema);
export { ProfileModel };
