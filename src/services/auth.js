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