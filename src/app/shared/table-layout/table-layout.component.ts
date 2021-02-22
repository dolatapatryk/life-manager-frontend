import { Component, Input } from '@angular/core';
import { Column } from '../data-table/column';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-table-layout',
    templateUrl: './table-layout.component.html',
    styleUrls: ['./table-layout.component.scss']
})
export class TableLayoutComponent<T> {
    @Input() columns: Column<T>[];
    @Input() data: T[];
    @Input() pageSizeOptions: number[] = [5, 10, 25, 100];
    @Input() pageSize = 25;

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    navigateToAddRoute() {
        this.router.navigate(['add'], { relativeTo: this.route });
    }
}
