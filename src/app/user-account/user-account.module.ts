import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccountRoutingModule } from './user-account-routing.module';
import { LoginComponent } from './login/login.component';
import { UserAccountLayoutComponent } from './user-account-layout/user-account-layout.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';


@NgModule({
    declarations: [LoginComponent, UserAccountLayoutComponent, RegisterComponent],
    imports: [
        CommonModule,
        UserAccountRoutingModule,
        FormsModule
    ]
})
export class UserAccountModule {
}
