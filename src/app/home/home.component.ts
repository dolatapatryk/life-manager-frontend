import { Component } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    user: User;

    constructor(
        private userService: UserService
    ) {
        this.user = this.userService.userAccount;
    }

    logout() {
        this.userService.logout();
    }
}
