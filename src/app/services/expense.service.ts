import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expense } from '../models/expense';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ExpenseService {
    mockExpenses: Expense[] = [
        {
            amount: 125.5,
            date: 1612197767000,
            accountId: 2,
            categoryId: 1
        },
        {
            amount: 240,
            date: 1612197768000,
            accountId: 2,
            categoryId: 2
        },
        {
            amount: 13.56,
            date: 1612197769000,
            accountId: 2,
            categoryId: 3
        },
        {
            amount: 45,
            date: 1612197772000,
            accountId: 2,
            categoryId: 1
        }
    ];

    constructor(
        private http: HttpClient
    ) {
    }

    getExpenses() {
        return of(this.mockExpenses);
    }

    getExpensesByCategory(categoryId: number) {
        return of(this.mockExpenses.filter(expense => expense.categoryId === categoryId));
    }
}
