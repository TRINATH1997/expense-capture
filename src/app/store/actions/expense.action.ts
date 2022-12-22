import { createAction, props } from '@ngrx/store';
import { ExpenseItem } from '../../models/expense-item';

export const addExpense = createAction('Add Expense', (expenseItem: ExpenseItem) => ({ expenseItem }));
export const deleteExpense = createAction('Delete Expense', (itemIndex: number) => ({itemIndex}));
