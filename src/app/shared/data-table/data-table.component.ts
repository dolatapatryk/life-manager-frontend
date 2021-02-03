import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Column, ColumnType } from './column';

@Component({
    selector: 'app-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent<T> implements OnInit {
    @Input() columns: Column<T>[];

    @Input() set data(data: T[]) {
        this.dataSource.data = data;
    }

    @Input() pageSizeOptions: number[] = [5, 10, 25, 100];
    @Input() pageSize = 25;
    dataSource = new MatTableDataSource<T>();
    columnNames: string[];
    columnTypes = ColumnType;
    defaultDateFormat = 'yyyy-MM-dd HH:mm';

    constructor() {
    }

    ngOnInit(): void {
        this.columnNames = ['position', ...this.columns.map(column => column.name.toString())];
    }

}
