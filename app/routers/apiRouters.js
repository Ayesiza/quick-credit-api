import express from 'express';
import { signUpUser,userLogin, verifiedUser } from '../controllers/userContorllers';
import { validation,checkIfUserExist,  getToken, verifyUserToken,userIsAdmin} from '../middleware/auth'
import { specificLoan ,getLoanApplication,loanApplication,viewLoanRepayments,createRepayment} from '../controllers/loansControllers'




const router = express.Router()

router.post('/users/auth/signup', validation, checkIfUserExist,signUpUser);
router.post('/users/auth/signin', userLogin)
router.patch('/users/:email/verify', getToken,verifyUserToken,userIsAdmin, verifiedUser)
router.get('/loans/:id',getToken,verifyUserToken,specificLoan)
router.get ('/loans',getToken,verifyUserToken,getLoanApplication)
router.post ('/loans',getToken,verifyUserToken,loanApplication)
router.get ('/loans/:loanid/repayments',getToken,verifyUserToken,viewLoanRepayments)
router.post ('/loans/:loanid/repayments',getToken,verifyUserToken,createRepayment)








export default router;