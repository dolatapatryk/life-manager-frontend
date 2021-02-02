import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
    declarations: [DataTableComponent],
    exports: [
        DataTableComponent
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule
    ]
})
export class SharedModule { }
