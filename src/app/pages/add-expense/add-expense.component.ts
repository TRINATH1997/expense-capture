import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss'],
})
export class AddExpenseComponent implements OnInit {
  expenseForm: FormGroup;
  submitted = false;
  successMsg = false;
  expense_Sub_type = [
    { name: 'Accommodation' },
    { name: 'Food' },
    { name: 'Milage' },
    { name: 'PublicTransport' },
  ];
  selectedSubItem = '';
  constructor(
    private fb: FormBuilder,
    private expenseService: ExpenseService
  ) {}

  ngOnInit(): void {
    this.expenseForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      expenseType: ['', Validators.required],
      expenseDate: ['', Validators.required],
      value: ['', Validators.required, Validators.pattern('[0-9]*')],
    });
  }

  addExpense(formValue) {
    if (this.expenseForm.invalid) {
      this.submitted = true;
      return;
    } else {
      console.log('Add expense', formValue.value);
      this.expenseService.addItem(formValue.value);
      this.successMsg = true;
      this.expenseForm.reset();
    }
  }

  onReset(): void {
    this.submitted = false;
    this.expenseForm.reset();
  }
  keyPressNumbers(event) {
    var charCode = event.which ? event.which : event.keyCode;
    // Only Numbers 0-9
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
}
