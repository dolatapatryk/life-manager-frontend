import { Component } from '@angular/core';
import { LoginInfo } from '../../models/login-info';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginInfo: LoginInfo = { username: '', password: '', rememberMe: false };
    loading = false;

    login() {
        console.log(':::loginInfo', this.loginInfo);
        this.loading = true;
    }
}
