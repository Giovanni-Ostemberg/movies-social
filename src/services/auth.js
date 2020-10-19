<<<<<<< HEAD
export const TOKEN_KEY = "@moviesSocial-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
=======
import { verify } from "jsonwebtoken";
import { promisify } from "util";

const authMiddleware = async (req, res, next) =>{
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ error: "No token provided" });
  }

  const [scheme, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(verify)(token, "secret");

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).send({ error: "Token invalid" });
  }
};

export {authMiddleware};
>>>>>>> operations/movies
