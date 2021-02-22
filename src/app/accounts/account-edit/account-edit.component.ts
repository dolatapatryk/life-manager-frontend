import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    template: ''
})
export class AccountEditDialogEntryComponent {
    constructor(
        private dialog: MatDialog,
        private router: Router,
        private route: ActivatedRoute
    ) {
        const dialogRef = this.dialog.open(AccountEditComponent, {
            width: 'auto'
        });
        dialogRef.afterClosed().subscribe(() => this.router.navigate(['../'], { relativeTo: this.route }));
    }
}

@Component({
    selector: 'app-account-edit',
    templateUrl: './account-edit.component.html',
    styleUrls: ['./account-edit.component.scss']
})
export class AccountEditComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
