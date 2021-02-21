import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from '../../environments/environment';
import { LoginInfo } from '../models/login-info';
import { map } from 'rxjs/operators';
import { NewUser } from '../user-account/register/register.component';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userSub: BehaviorSubject<User>;
    user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSub = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSub.asObservable();
    }

    get userAccount(): User {
        return this.userSub.value;
    }

    register(user: NewUser) {
        return this.http.post<NewUser>(`${environment.apiUrl}/users/register`, user);
    }

    login(loginInfo: LoginInfo) {
        return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, loginInfo)
            .pipe(
                map(user => {
                    // store user and token in local storage to keep user logged
                    localStorage.setItem('user', JSON.stringify(user));
                    this.userSub.next(user);
                    return user;
                })
            );
    }

    logout() {
        localStorage.removeItem('user');
        this.userSub.next(null);
        this.router.navigate(['/account/login']);
    }


}
