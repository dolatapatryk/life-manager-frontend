import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Account } from '../models/account';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(
        private http: HttpClient
    ) {
    }

    getAccounts() {
        return this.http.get<Account[]>(`${environment.apiUrl}/accounts`);
    }
}
