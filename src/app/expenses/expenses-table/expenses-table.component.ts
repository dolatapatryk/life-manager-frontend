import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense';
import { Column } from '../../shared/data-table/column';

@Component({
    selector: 'app-expenses-list',
    templateUrl: './expenses-table.component.html',
    styleUrls: ['./expenses-table.component.scss']
})
export class ExpensesTableComponent implements OnInit {
    expenses: Array<Expense> = [{
        amount: 125.5,
        date: 1612197767000,
        accountId: 2,
        categoryId: 1
    }];
    columns: Column<Expense>[] = [
        { name: 'amount' },
        { name: 'date' },
        { name: 'accountId' },
        { name: 'categoryId' }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

}
