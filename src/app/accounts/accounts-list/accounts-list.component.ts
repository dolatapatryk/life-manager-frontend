import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
    selector: 'app-accounts-list',
    templateUrl: './accounts-list.component.html',
    styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {
    accounts: Array<Account>;
    displayedColumns: string[] = ['position', 'name', 'balance'];
    pageSizeOptions: number[] = [5, 10, 25, 100];

    constructor(
        private accountService: AccountService
    ) {
    }

    ngOnInit(): void {
        this.accountService.getAccounts().subscribe(accounts => this.accounts = accounts);
    }

}
