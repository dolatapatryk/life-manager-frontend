import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Column } from '../../shared/data-table/column';
import { Account } from '../../models/account';

@Component({
    selector: 'app-accounts-list',
    templateUrl: './accounts-table.component.html',
    styleUrls: ['./accounts-table.component.scss']
})
export class AccountsTableComponent implements OnInit {
    accounts: Account[];
    columns: Column<Account>[] = [
        { name: 'name', sortable: true},
        { name: 'balance', sortable: true}
    ];

    constructor(
        private accountService: AccountService
    ) {
    }

    ngOnInit(): void {
        this.accountService.getAccounts().subscribe(accounts => this.accounts = accounts);
    }

    getSum() {
        if (this.accounts && this.accounts.length) {
            let sum = 0.0;
            this.accounts.forEach(account => sum += account.balance);
            return sum;
        }
    }
}
