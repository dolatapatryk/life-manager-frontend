import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsTableComponent } from './accounts-table/accounts-table.component';
import { SharedModule } from '../shared/shared.module';
import { AccountEditComponent, AccountEditDialogEntryComponent } from './account-edit/account-edit.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    declarations: [AccountsTableComponent, AccountEditComponent, AccountEditDialogEntryComponent],
    imports: [
        CommonModule,
        AccountsRoutingModule,
        SharedModule,
        MatDialogModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccountsModule {
}
