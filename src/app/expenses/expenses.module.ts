import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesLayoutComponent } from './expenses-layout/expenses-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ExpensesTableComponent } from './expenses-table/expenses-table.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryExpensesTableComponent } from './category-expenses-table/category-expenses-table.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    declarations: [ExpensesLayoutComponent, ExpensesTableComponent, CategoryExpensesTableComponent],
    imports: [
        CommonModule,
        ExpensesRoutingModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        SharedModule,
        MatButtonToggleModule,
        MatIconModule
    ]
})
export class ExpensesModule {
}
