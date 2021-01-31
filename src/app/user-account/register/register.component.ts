import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { finalize } from 'rxjs/operators';

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
        private userService: UserService
    ) {
    }


    register() {
        this.loading = true;
        this.userService.register(this.newUser)
            .pipe(finalize(() => this.loading = false))
            .subscribe(response => console.log(':::success register', response), error => console.log(':::error reg', error));
    }
}
