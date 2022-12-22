import { Component, OnInit } from '@angular/core';
import { ExpenseItem } from 'src/app/models/expense-item';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
})
export class ExpenseListComponent implements OnInit {
  expenseItems: ExpenseItem[];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.getAllexpenses();
  }

  getAllexpenses() {
    this.expenseService.getItems().subscribe((data) => {
      this.expenseItems = data;
    });
  }

  onDelete(itemIndex) {
    console.log('itemIndex', itemIndex);
    this.expenseService.deleteItem(itemIndex);
  }
}
