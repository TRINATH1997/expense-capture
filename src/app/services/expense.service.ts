

//this service can be used to store your items in the browser's local storage instead of an API call.
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ExpenseItem } from '../models/expense-item';
import { ExpenseState } from '../reducers/expense.reducers';
import { getExpenses } from '../selectors/expense.selector';
import { addExpense, deleteExpense } from '../store/actions/expense.action';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor(private store: Store<ExpenseState>) {}

  getItems(): Observable<ExpenseItem[]> {
    return this.store.pipe(select(getExpenses));
  }

  addItem(item) {
    this.store.dispatch(addExpense(item));
  }

  deleteItem(itemIndex) {
    this.store.dispatch(deleteExpense(itemIndex));
  }
}
  