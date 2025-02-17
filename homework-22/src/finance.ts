

namespace Finance {
    export class LoanCalculator{
        private principal:number;
        private annualRate: number;
        private years: number;

        constructor(principal:number, annualRate: number, years: number){
            this.principal = principal;
            this.annualRate = annualRate;
            this.years = years;
        }
        calculateMonthlyPayment():number {
            const monthlyRate = this.annualRate / 12 / 100;
            const month = this.years * 12;
            return (this.principal * monthlyRate)/(1 - Math.pow(1 + monthlyRate, -month))
        }
    }

    export class TaxCalculator{

        private income: number;
        private taxRate: number;

        constructor (income: number, taxRate: number){
            this.income = income;
            this.taxRate = taxRate;
        }

        calculateIncomeTax():number{
            return this.income * (this.taxRate / 100)
        }
    }
}