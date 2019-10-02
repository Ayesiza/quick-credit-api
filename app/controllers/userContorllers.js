import jwt from 'jsonwebtoken';
import { users} from '../models/users'

export const signUpUser = (req,res) =>{
    const { email,firstName, lastName,  password, address, isAdmin} = req.body;
    const id = users.length + 1;
    const status = 'unverified'
    const user = {id, email, firstName, lastName,  password, address, status, isAdmin}
    const token = jwt.sign({id, email,firstName, lastName,  password, address, status, isAdmin}, 'gfgggre67hfrggrhje', { expiresIn: '24hr' });
    const finduser = users.find(user => user.email === email);
    if(finduser) return res.status(409).send({status:409, message:'user already exist'})
        users.push(user);
        user.token = token;
        res.status(201).send({status:201,message:'User created successfully',user});
  };

export const userLogin = (req,res) => {
    const user = users.find(user => user.email === req.body.email)
    if (!user) return res.status(404).send({status:404,message:'user of the given id not found'})
    if(user.password !== req.body.password) return res.status(400).send({message:'wrong email or password'})
    const token = jwt.sign({email:user.email}, 'gfgggre67hfrggrhje', { expiresIn: '24hr' });
    user.token = token;
    res.status(200).send({status:200,message:'user sucessfully loggedin',user})
}