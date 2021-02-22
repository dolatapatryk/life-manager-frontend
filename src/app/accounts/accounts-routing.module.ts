import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsTableComponent } from './accounts-table/accounts-table.component';
import { AccountEditComponent, AccountEditDialogEntryComponent } from './account-edit/account-edit.component';


const routes: Routes = [
    {
        path: '',
        component: AccountsTableComponent,
        children: [
            {
                path: 'add',
                component: AccountEditDialogEntryComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    entryComponents: [AccountEditComponent]
})
export class AccountsRoutingModule {
}
