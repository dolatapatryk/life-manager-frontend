import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsTableComponent } from './accounts-table/accounts-table.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [AccountsTableComponent],
    imports: [
        CommonModule,
        AccountsRoutingModule,
        SharedModule
    ]
})
export class AccountsModule {
}
