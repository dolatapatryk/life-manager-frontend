import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { finalize } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

export interface NewUser {
    username?: string;
    password?: string;
    confirmPassword?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
}

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    newUser: NewUser = { password: '', confirmPassword: '' };
    loading = false;

    constructor(
        private userService: UserService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }


    register() {
        this.loading = true;
        this.userService.register(this.newUser)
            .pipe(finalize(() => this.loading = false))
            .subscribe(() => this.onSuccessRegister(), error => this.onErrorRegister(error));
    }

    private onSuccessRegister() {
        this.router.navigate(['../login'], { relativeTo: this.route });
    }

    private onErrorRegister(error) {
        console.log(':::error', error);
    }
}
