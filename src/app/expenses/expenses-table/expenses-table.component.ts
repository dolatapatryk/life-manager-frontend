import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense';
import { Column, ColumnType } from '../../shared/data-table/column';
import { ExpenseService } from '../../services/expense.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExpenseCategoryService } from '../../services/expense-category.service';

@Component({
    selector: 'app-expenses-list',
    templateUrl: './expenses-table.component.html',
    styleUrls: ['./expenses-table.component.scss']
})
export class ExpensesTableComponent implements OnInit {
    expenses: Expense[];
    categoryId: number;
    categorySub: Subscription;
    columns: Column<Expense>[] = [
        { name: 'amount' },
        { name: 'date', type: ColumnType.DATE },
        { name: 'accountId' },
        { name: 'categoryId' }
    ];

    constructor(private expenseService: ExpenseService, private route: ActivatedRoute) {
        this.categoryId = +this.route.snapshot.params.categoryId;
    }

    ngOnInit(): void {
        console.log('::::init');
        this.categorySub = this.route.params.subscribe(({ categoryId }) => {
            this.categoryId = +categoryId;
            this.loadData();
        });
        this.loadData();
    }

    loadData() {
        const request = !!this.categoryId ? this.expenseService.getExpensesByCategory(this.categoryId) : this.expenseService.getExpenses();
        request.subscribe(expenses => this.expenses = expenses);
    }
}
