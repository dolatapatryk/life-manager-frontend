import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SidebarTreeComponent } from './sidebar-tree/sidebar-tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [DataTableComponent, SidebarTreeComponent],
    exports: [
        DataTableComponent,
        SidebarTreeComponent
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatTreeModule,
        MatButtonModule,
        MatIconModule,
        RouterModule
    ]
})
export class SharedModule { }
