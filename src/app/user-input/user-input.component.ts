import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { IInvestmentQuery } from '../@interfaces/IInvestmentQuery';
import { InvestmentService } from '../services/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  investmentService = inject(InvestmentService);

  investmentForm = new FormGroup({
    initialInvestment: new FormControl<number>(0, Validators.required),
    annualInvestment: new FormControl<number>(0, Validators.required),
    expectedReturn: new FormControl<number>(5, Validators.required),
    duration: new FormControl<number>(10, Validators.required),
  });

  handleSubmit() {
    if (this.investmentForm.valid) {
      this.investmentService.calculateInvestmentResults(
        this.investmentForm.value as IInvestmentQuery,
      );
    }
  }
}
