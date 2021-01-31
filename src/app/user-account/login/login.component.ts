import { Component } from '@angular/core';
import { LoginInfo } from '../../models/login-info';
import { UserService } from '../../services/user.service';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginInfo: LoginInfo = { username: '', password: '', rememberMe: false };
    loading = false;

    constructor(
        private userService: UserService
    ) {
    }

    login() {
        this.loading = true;
        this.userService.login(this.loginInfo)
            .pipe(finalize(() => this.loading = false))
            .subscribe(user => console.log(':::success', user), error => console.log(':::error', error));
    }
}
