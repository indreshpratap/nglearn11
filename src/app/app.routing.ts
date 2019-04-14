import { Routes } from '@angular/router';
import {
    ContactUsComponent,
    LoginComponent,
    HomeComponent
} from './app-core/pages';
import { adminPageRoutes } from './app-admin/pages';
import { AuthGuard } from './guards/auth.guard';



export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "contact", component: ContactUsComponent },
    {
        path: "home", component: HomeComponent,canActivate:[AuthGuard], 
        canActivateChild:[AuthGuard],
        children: [
            {
                path: 'admin',
                loadChildren: "./app-admin/app-admin.module#AppAdminModule"
            },
            {
                path: 'user',
                loadChildren: "./app-user/app-user.module#AppUserModule"
            },
            {
                path: 'office',
                loadChildren: './app-frontoffice/app-frontoffice.module#AppFrontofficeModule'
            }

        ]
    }

] 