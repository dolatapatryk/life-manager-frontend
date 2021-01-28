import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountLayoutComponent} from './account-layout/account-layout.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
    {
        path: '',
        component: AccountLayoutComponent,
        children: [
            {path: 'login', component: LoginComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule {
}
