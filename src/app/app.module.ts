import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbDatepickerModule,
  NbInputModule,
  NbMenuModule,
  NbSelectModule,
  NbIconModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { StoreModule } from '@ngrx/store';
import { AddExpenseComponent } from './pages/add-expense/add-expense.component';
import { ExpenseListComponent } from './pages/expense-list/expense-list.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ExpenseService } from './services/expense.service';
import { expenseReducer } from './reducers/expense.reducers';

@NgModule({
  declarations: [AppComponent, AddExpenseComponent, ExpenseListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    StoreModule.forRoot({ expenses: expenseReducer }),
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbCardModule,
    NbSelectModule,
    ReactiveFormsModule,
    NbInputModule,
    NbDatepickerModule.forRoot(),
    NbButtonModule,
    NbIconModule,
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
