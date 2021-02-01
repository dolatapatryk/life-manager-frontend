import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense';

@Component({
    selector: 'app-expenses-list',
    templateUrl: './expenses-list.component.html',
    styleUrls: ['./expenses-list.component.scss']
})
export class ExpensesListComponent implements OnInit {
    expenses: Array<Expense> = [{
        amount: 125.5,
        date: 1612197767000,
        accountId: 2,
        categoryId: 1
    }];
    displayedColumns: string[] = ['position', 'amount', 'date', 'account', 'category'];
    pageSizeOptions: number[] = [5, 10, 25, 100];

    constructor() {
    }

    ngOnInit(): void {
    }

}
