import express from 'express';
import { signUpUser,userLogin, verifiedUser } from '../controllers/userContorllers';
import { validation,checkIfUserExist,  getToken, verifyUserToken,userIsAdmin} from '../middleware/auth'




const router = express.Router()

router.post('/users/auth/signup', validation, checkIfUserExist,signUpUser);
router.post('/users/auth/signin', userLogin)
router.patch('/users/:email/verify', getToken,verifyUserToken,userIsAdmin, verifiedUser)





export default router;