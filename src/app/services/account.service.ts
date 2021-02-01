import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(
        private http: HttpClient
    ) {
    }

    getAccounts() {
        return this.http.get<Array<Account>>(`${environment.apiUrl}/accounts`);
    }
}
