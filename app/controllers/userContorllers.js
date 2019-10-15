import jwt from 'jsonwebtoken';
import { users} from '../models/users'
const SECRETE_KEY = 'gfgggre67hfrggrhje'

export const signUpUser = (req,res) =>{
    const { email,firstName, lastName,  password, address, isAdmin} = req.body;
    const id = users.length + 1;
    const user = {id, email, firstName, lastName,  password, address, isAdmin}
    const token = jwt.sign({user}, 'gfgggre67hfrggrhje', { expiresIn: '24hr' });
        users.push(user);
        user.token = token;
        res.status(201).send({status:201,message:'User created successfully',user});
  };
  
 
export const userLogin = (req,res) => {
    const user = users.find(user => user.email === req.body.email)
    if (!user) return res.status(404).send({status:404,message:'user of the given id not found'})
    if(user.password !== req.body.password) return res.status(400).send({message:'wrong email or password'})
    const token = jwt.sign(user, 'gfgggre67hfrggrhje', { expiresIn: '24hr' });
    user.token = token;
    res.status(200).send({status:200,message:'user sucessfully loggedin',user})

};

export  const  verifiedUser = (req,res) => {
    const user = users.find(user => user.email === req.params.email)
    if(!user) return  res.status(404).send({ status: 404, message: 'user with given email not Found' });
    if(user.status === 'verified') return res.send({status:409, message:'User already verified'})
    user.status = 'verified';
    res.send({status:200, message:'User has been verified', user})
}
