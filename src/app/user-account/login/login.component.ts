import { Component } from '@angular/core';
import { LoginInfo } from '../../models/login-info';
import { UserService } from '../../services/user.service';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    loginInfo: LoginInfo = { username: '', password: '', rememberMe: false };
    loading = false;

    constructor(
        private userService: UserService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    login() {
        this.loading = true;
        this.userService.login(this.loginInfo)
            .pipe(finalize(() => this.loading = false))
            .subscribe(() => this.onSuccessLogin(), error => this.onErrorLogin(error));
    }

    private onSuccessLogin() {
        const returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
        this.router.navigateByUrl(returnUrl);
    }

    private onErrorLogin(error) {
        console.log(':::error', error);
    }
}
