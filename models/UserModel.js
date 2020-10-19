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
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  birthday: {
    type: Date,
  },
  password: {
    type: String,
  },
});

// schema.pre("save", async function hashPassword(next) {
//   if (!this.isModified("password")) next();

//   this.password = await bcrypt.hash(this.password, 8);
// });

// schema.methods = {
//   compareHash(hash) {
//     return bcrypt.compare(hash, this.password);
//   },

//   generateToken() {
//     return jwt.sign({ id: this.id }, "secret", {
//       expiresIn: 86400
//     });
//   }
// };

const UserModel = mongoose.model("users", schema);
export { UserModel };
