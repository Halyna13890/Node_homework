/// <reference path="finance.ts" />
/// <reference path="userManagement.ts" />


//Задание 1

import {capitalize, reverseString} from './stringUtils'


console.log(capitalize('hello world'));
console.log(reverseString('Hello world'));



//Задание 2

const loan = new Finance.LoanCalculator(20000, 5, 10)
console.log(`Ежемесячный платеж по кредиту: ${loan.calculateMonthlyPayment()} USD`);

const tax = new Finance.TaxCalculator(50000, 20);
console.log(`Сумма налога на доход: ${tax.calculateIncomeTax()} USD`);



//Задание 3

const admin = new UserManagement.Admin.AdminUser('Ivan Sotnik', 'ivan@gmail.com', false)

console.log(admin.getUserInfo());

admin.setName('Pavel')
admin.setEmail('pavel@gmail.com')
admin.setSuperAdminStatus(true)

console.log(admin.getUserInfo());
