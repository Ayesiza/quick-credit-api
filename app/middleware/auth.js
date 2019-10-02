import { users } from '../models/users';
import jwt from 'jsonwebtoken'
const SECRETE_KEY = 'gfgggre67hfrggrhje'

export const  getToken = (req, res, next) => {
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader === 'undefined') return res.status(403).send({ status: 403, error: 'provide a token to perform this action' });
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  }
export const verifyUserToken = (req, res, next)=> {
    jwt.verify(req.token, SECRETE_KEY, (err, user) => {
      if (err) return res.status(403).json({ error: 403, message: err.message });
      req.user = user
      next();
    })
  }