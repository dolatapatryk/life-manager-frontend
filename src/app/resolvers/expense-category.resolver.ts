import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ExpenseCategory } from '../models/expense-category';
import { Observable } from 'rxjs';
import { ExpenseCategoryService } from '../services/expense-category.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ExpenseCategoryResolver implements Resolve<ExpenseCategory> {

    constructor(private expenseCategoryService: ExpenseCategoryService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<ExpenseCategory> {
        const id = +route.params.categoryId;
        return this.expenseCategoryService.getExpenseCategory(id);
    }
}
