import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExpenseCategory } from '../../models/expense-category';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-category-expenses-table',
    templateUrl: './category-expenses-table.component.html',
    styleUrls: ['./category-expenses-table.component.scss']
})
export class CategoryExpensesTableComponent implements OnInit, OnDestroy {
    category: ExpenseCategory;
    categorySub: Subscription;

    constructor(private route: ActivatedRoute) {
        this.category = this.route.snapshot.data.category;
    }

    ngOnInit(): void {
        this.categorySub = this.route.data.subscribe(({ category }) => this.category = category);
    }

    ngOnDestroy(): void {
        this.categorySub.unsubscribe();
    }
}
