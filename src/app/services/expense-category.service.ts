import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ExpenseCategory } from '../models/expense-category';

@Injectable({
    providedIn: 'root'
})
export class ExpenseCategoryService {

    constructor(
        private http: HttpClient
    ) {
    }

    getExpenseCategories() {
        return this.http.get<ExpenseCategory[]>(`${environment.apiUrl}/expenses/categories`);
    }

    getExpenseCategory(id: number) {
        return this.http.get<ExpenseCategory>(`${environment.apiUrl}/expenses/categories/${id}`);
    }
}
