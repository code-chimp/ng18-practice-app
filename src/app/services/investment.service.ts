import { Injectable, signal } from '@angular/core';
import { IInvestmentYearData } from '../@interfaces/IInvestmentYearData';
import { IInvestmentQuery } from '../@interfaces/IInvestmentQuery';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  investmentReturns = signal<IInvestmentYearData[]>([]);

  calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  }: IInvestmentQuery) {
    const annualData: IInvestmentYearData[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest = investmentValue - annualInvestment * year - initialInvestment;

      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.investmentReturns.set(annualData);
  }
}
