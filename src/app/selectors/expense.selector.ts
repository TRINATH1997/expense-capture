import { createFeatureSelector, createSelector } from '@ngrx/store';
import { expenseFeatureKey, ExpenseState } from '../reducers/expense.reducers';

export const selectExpenseState =
  createFeatureSelector<ExpenseState>(expenseFeatureKey);

export const getExpenses = createSelector(
  selectExpenseState,
  (state: ExpenseState) => {
    return state.expenses;
  }
);
