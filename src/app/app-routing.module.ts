import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const userAccountModule = () => import('./user-account/user-account.module').then(x => x.UserAccountModule);
const accountsModule = () => import('./accounts/accounts.module').then(x => x.AccountsModule);
const expensesModule = () => import('./expenses/expenses.module').then(x => x.ExpensesModule);
const todosModule = () => import('./todos/todos.module').then(x => x.TodosModule);

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: DashboardComponent },
            { path: 'accounts', loadChildren: accountsModule },
            { path: 'expenses', loadChildren: expensesModule },
            { path: 'todos', loadChildren: todosModule }
        ]
    },
    { path: 'account', loadChildren: userAccountModule },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
