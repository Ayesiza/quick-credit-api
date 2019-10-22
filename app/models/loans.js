

export const loans = [
{id:1,
user:'maira@gmail.com',
createdOn:Date.now(),
status:'pending',
repaid: false,
tenor: 10,
amount: 1000,
paymentInstallment:100,
balance: 900,
interest: 10},
{
id:2,
user:'ameer@gmail.com',
createdOn:Date.now(),
status:'approved',
repaid: true,
tenor: 20,
amount: 10000,
paymentInstallment:100,
balance: 500,
interest: 10   
},
{
    id:3,
    user:'zariat@gmail.com',
    createdOn:Date.now(),
    status:'pending',
    repaid: false,
    tenor: 20,
    amount: 10000,
    paymentInstallment:100,
    balance: 500,
    interest: 10   
    }

]

export const repayments = [
    {
      id: 1,
      loanId:1,
      createdOn: 1556793783791,
      amount: 300,
      monthlyInstallment: 10.6,
      paidAmount:2.000,
      balance: 10.000

    },
    
  
    {
      id: 2,
      loanId:2,
      createdOn: 1556793783791,
      amount: 300,
      monthlyInstallment: 10.6,
      paidAmount:2.000,
      balance: 10.000
    },
    {
      id: 3,
      loanId:3,
      createdOn: 1556793783791,
      amount: 300,
      monthlyInstallment: 10.6,
      paidAmount:2.000,
      balance: 10.000
    }
  
]