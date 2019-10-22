import { users } from '../models/users';
import {loans} from '../models/loans'
import jwt from 'jsonwebtoken'
const SECRETE_KEY = 'gfgggre67hfrggrhje'
import Joi from 'joi';


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
export const checkIfUserExist =(req,res,next) => {
  const user = users.find(user=>user.email === req.body.email)
  if(user) return res.status(409).send({error:409,message:'user already exists '})
 next();

}

export const userIsAdmin = (req,res,next) => {
  if (req.user.isAdmin = false) return res.status(403).send({error:403,message:'for only Admin'})
  next()
}


export const validation = (req, res, next) => {

    const authSchema = Joi.object().keys({
      email: Joi.string().trim().email({ minDomainSegments: 2 }).required(),
      firstName: Joi.string().trim().min(3).regex(/^[a-zA-Z]+$/).required(),
      lastName: Joi.string().trim().min(3).regex(/^[a-zA-Z]+$/).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
      address: Joi.string().min(3).regex(/^[a-zA-Z0-9]+$/).required(),
      isAdmin: Joi.required(),
     

    });
    const data = Joi.validate(req.body, authSchema);

    if (data.error) {
      const resFomart = data.error.details[0].message.replace('"', '').split('"');
      const gotElem = resFomart[0];
      return res.status(400).send({ status: 400, error: `${gotElem} field is invalid` });
    }
    next();
  }