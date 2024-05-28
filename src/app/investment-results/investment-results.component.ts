import { Component, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { InvestmentService } from '../services/investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  private _investmentService = inject(InvestmentService);

  get returns() {
    return this._investmentService.investmentReturns();
  }
}
