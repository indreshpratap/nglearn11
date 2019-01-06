import { Routes } from "@angular/router";
import { AdmCategoryComponent } from "./adm-category/adm-category.component";
import { AdmListInventoryComponent } from "./adm-list-inventory/adm-list-inventory.component";
import { AdmNewInventoryComponent } from "./adm-new-inventory/adm-new-inventory.component";
import { AdmUsersComponent } from "./adm-users/adm-users.component";

export const adminPages = [
    AdmCategoryComponent,
    AdmListInventoryComponent,
    AdmNewInventoryComponent,
    AdmUsersComponent
];

export const adminPageRoutes: Routes = [
    { path: 'new-inventory', component: AdmNewInventoryComponent },
    { path: 'list-inventory', component: AdmListInventoryComponent },
    { path: 'category', component: AdmCategoryComponent },
    { path: 'users', component: AdmUsersComponent },
];