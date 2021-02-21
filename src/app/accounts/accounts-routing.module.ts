import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsTableComponent } from './accounts-table/accounts-table.component';


const routes: Routes = [
    { path: '', component: AccountsTableComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountsRoutingModule {
}
