import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesLayoutComponent } from './expenses-layout/expenses-layout.component';
import { ExpensesTableComponent } from './expenses-table/expenses-table.component';


const routes: Routes = [
    {
        path: '',
        component: ExpensesLayoutComponent,
        children: [
            { path: '', component: ExpensesTableComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpensesRoutingModule {
}
