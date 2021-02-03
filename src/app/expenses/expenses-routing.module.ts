import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesLayoutComponent } from './expenses-layout/expenses-layout.component';
import { ExpensesTableComponent } from './expenses-table/expenses-table.component';
import { CategoryExpensesTableComponent } from './category-expenses-table/category-expenses-table.component';
import { ExpenseCategoryResolver } from '../resolvers/expense-category.resolver';


const routes: Routes = [
    {
        path: '',
        component: ExpensesLayoutComponent,
        children: [
            { path: '', component: ExpensesTableComponent },
            {
                path: 'categories/:categoryId',
                component: CategoryExpensesTableComponent,
                resolve: { category: ExpenseCategoryResolver }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpensesRoutingModule {
}
