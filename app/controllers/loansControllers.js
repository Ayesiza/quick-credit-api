import {loans} from '../models/loans'
import { repayments} from '../models/loans'

export  const specificLoan = (req,res) => {
    const loan = loans.find(loan => loan.id === parseInt(req.params.id))
    if(!loan) return res.status(404).send({status:404, message:'loan not found'})
    res.send({status:200, message:'specific loan got', loan})
}

export const getLoanApplication= (req,res) => {
    res.status(200).send({status:200, loans});
};


  export const loanApplication = (req,res ) =>{
    const { amount, tenor } = req.body;
    const { firstName, lastName, email } = req.user;
  
      const loanId = loans.length + 1;
      const interest = 0.05 * Number(amount).toFixed(2);
      const paymentInstallment = (Number(amount + interest) / tenor).toFixed(2);
      const balance = Number(amount + interest).toFixed(2);
      const repaid = false;
      const status = 'pending';
      const createdAt = new Date().toLocaleString();
  
      // Loan data returned to user
      const loanApplied = {loanId,firstName,lastName,email,amount,tenor,interest, paymentInstallment,balance, repaid, createdAt,status};
  
      // Loan data stored in data structure
      const id = loanApplied.loanId;
      const user = req.user.email;
      const newLoan = {id, user,amount,interest, paymentInstallment, balance,tenor,repaid, createdAt,status};
      const currentLoan = loans.find(loan => loan.user === req.user.email);
      if (currentLoan) {
        return res.status(409).send({status: 409,error: 'You have a current unrepaid loan',});
      }
  
      loans.push(newLoan);
      return res.status(201).send({status: 201,data: loanApplied,});
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
  