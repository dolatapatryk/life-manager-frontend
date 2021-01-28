import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    newUser: User = new User();


    register() {
    }
}
