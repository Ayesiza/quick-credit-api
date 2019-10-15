import {loans} from '../models/loans'
import { loanApps} from '../models/loans'
import { repayments} from '../models/loans'

export  const specificLoan = (req,res) => {
    const loan = loans.find(loan => loan.id === parseInt(req.params.id))
    if(!loan) return res.status(404).send({status:404, message:'loan not found'})
    res.send({status:200, message:'specific loan got', loan})
}

export const getLoanApplication= (req,res) => {
    res.status(200).send({status:200, loans});
};

  export const createLoanApplication = (req,res ) =>{
      const { firstName,lastName,email,tenor,amount,paymentInstallment,balance,interest}= req.body
      const loanId =loanApps.length +1;
      const status = 'pending'
      const loanApp = {loanId,firstName,lastName,email,tenor,amount,paymentInstallment,status,balance,interest}
      loanApps.push(loanApp)
      res.status(201).send({status:201,message:'Your application has been received',loanApp});
  }
 export const viewLoanRepayments = (req,res) =>{
     res.status(200).send({status:200, repayments})

 }
 
 export const createRepayment = (req,res) => {
    const {loanId,createdOn,amount,monthlyInstallment,paidAmount,balance}= req.body
    const id =repayments.length +1;
    const repayment = {id,loanId,createdOn,amount,monthlyInstallment,paidAmount,balance}
    repayments.push(repayment)
    res.status(201).send({status:201,repayment})
 }
  