import express from 'express'
import { signUpUser,userLogin } from '../controllers/userContorllers'


const router = express.Router()

router.post('/users/auth/signup',  signUpUser);
router.post('/users/auth/signin',  userLogin)




export default router;