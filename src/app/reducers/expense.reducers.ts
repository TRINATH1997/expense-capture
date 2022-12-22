import {Action, createReducer, on} from '@ngrx/store'
import {ExpenseItem} from '../models/expense-item'
import {addExpense, deleteExpense} from '../store/actions/expense.action'

export const expenseFeatureKey = 'expenses';

export interface ExpenseState{
    expenses:ExpenseItem[];
}

const initialState : ExpenseState = {expenses: []};

export const expenseReducer = createReducer(
  initialState,
  on(addExpense, (state: ExpenseState, { expenseItem }) => {
    localStorage.setItem('state', JSON.stringify(expenseItem));

    return { ...state, expenses: [...state.expenses, expenseItem] };
  }),
  on(deleteExpense, (state: ExpenseState, { itemIndex }) => {
    return { ...state, expenses: state.expenses.filter((e, index) => index != itemIndex) };
  })
);