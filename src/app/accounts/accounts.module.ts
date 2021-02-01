import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [AccountsListComponent],
    imports: [
        CommonModule,
        AccountsRoutingModule,
        MatTableModule,
        MatPaginatorModule
    ]
})
export class AccountsModule { }
