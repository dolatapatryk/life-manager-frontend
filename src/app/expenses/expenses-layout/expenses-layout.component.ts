import { Component, OnInit } from '@angular/core';
import { ExpenseCategoryService } from '../../services/expense-category.service';
import { ExpenseCategory } from '../../models/expense-category';
import { TreeNode } from '../../shared/sidebar-tree/tree-node';

@Component({
    selector: 'app-expenses-layout',
    templateUrl: './expenses-layout.component.html',
    styleUrls: ['./expenses-layout.component.scss']
})
export class ExpensesLayoutComponent implements OnInit {
    categories: ExpenseCategory[];
    sidebarNodes: TreeNode[];

    constructor(private expenseCategoryService: ExpenseCategoryService) {
    }

    ngOnInit(): void {
        this.expenseCategoryService.getExpenseCategories()
            .subscribe(categories => {
                this.categories = categories;
                const categoryNodes: TreeNode[] = this.categories.map(category => ({
                    name: category.name,
                    routerLink: 'categories/' + category.id
                }));
                this.sidebarNodes = [{ name: 'All', routerLink: '.' }, { name: 'Categories', children: categoryNodes }];
            });
    }
}
