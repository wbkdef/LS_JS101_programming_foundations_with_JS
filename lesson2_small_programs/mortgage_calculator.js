const readLineSync = require('readline-sync');


// the loan amount
// the Annual Percentage Rate (APR)
// the loan duration

// From the above, you'll need to calculate the following two things:
// monthly interest rate
// loan duration in months

// PLAN
// Get the inputs (cast to integers)
// Make the conversions
// Use the formula to get monthly payments
// IMPROVEMENTS
// DONE Have it ask for another input if the input is empty
//    or can't be coerced to a number.
// Cover the case of 0% interest

function getNumber(prompt) {
  let num = readLineSync.question(prompt);
  while (num.trim() === '' || Number.isNaN(Number(num))) {
    console.log(`Unable to convert [[${num}]] to a number, please try again`);
    num = readLineSync.question(prompt);
  }
  return Number(num);
}

const loanAmt = getNumber("Please enter the total loan amount: ");
const interestRateAnnual =
  getNumber("Please enter the annual interest rate.  I.e. enter 6 for an interest rate of 6%: ");
const loanDurationYears =
  getNumber("Please enter the loan duration.  I.e. enter 2.5 if the loan is to be paid off in 2 years and 6 months: ");

const interestRateMonthly =
(((1 + (interestRateAnnual * .01)) ** (1 / 12)) - 1) * 100;
const loanDurationMonths = loanDurationYears * 12;

let monthlyPayment;
if (interestRateMonthly === 0) {
  monthlyPayment = loanAmt / loanDurationMonths;
} else {
  monthlyPayment = loanAmt * (
    interestRateMonthly / 100 /
    (1 - ((1 + (interestRateMonthly / 100)) ** (-loanDurationMonths))));
}

console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)} for the next ${loanDurationMonths} months.`);
