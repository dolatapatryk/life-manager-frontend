import { Component, Input, OnInit } from '@angular/core';
import { Expense } from '../../models/expense';
import { Column, ColumnType } from '../../shared/data-table/column';
import { ExpenseService } from '../../services/expense.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-expenses-table',
    templateUrl: './expenses-table.component.html',
    styleUrls: ['./expenses-table.component.scss']
})
export class ExpensesTableComponent implements OnInit {
    expenses: Expense[];
    private _categoryId: number;
    @Input() set categoryId(categoryId: number) {
        this._categoryId = categoryId;
        this.loadData();
    }

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
        this.loadData();
    }

    loadData() {
        const request = !!this._categoryId ? this.expenseService.getExpensesByCategory(this._categoryId)
            : this.expenseService.getExpenses();
        request.subscribe(expenses => this.expenses = expenses);
    }
}
