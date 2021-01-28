import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    user: User;

    constructor() {
    }
}
