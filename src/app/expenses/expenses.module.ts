import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesLayoutComponent } from './expenses-layout/expenses-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
    declarations: [ExpensesLayoutComponent, ExpensesListComponent],
    imports: [
        CommonModule,
        ExpensesRoutingModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule
    ]
})
export class ExpensesModule {
}
