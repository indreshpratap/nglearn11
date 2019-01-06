import { Routes } from '@angular/router';
import {
    ContactUsComponent,
    LoginComponent,
    HomeComponent
} from './app-core/pages';
import { adminPageRoutes } from './app-admin/pages';



export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "contact", component: ContactUsComponent },
    {
        path: "home", component: HomeComponent,
        children: [
            {
                path: 'admin',
                loadChildren: "./app-admin/app-admin.module#AppAdminModule"
            },
            {
                path: 'office',
                loadChildren: './app-frontoffice/app-frontoffice.module#AppFrontofficeModule'
            }

        ]
    }

] 