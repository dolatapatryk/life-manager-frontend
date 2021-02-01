import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesLayoutComponent } from './expenses-layout/expenses-layout.component';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';


const routes: Routes = [
    {
        path: '',
        component: ExpensesLayoutComponent,
        children: [
            { path: '', component: ExpensesListComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpensesRoutingModule {
}
