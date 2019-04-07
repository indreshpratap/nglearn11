import { Routes } from "@angular/router";
import { AdmCategoryComponent } from "./adm-category/adm-category.component";
import { AdmListInventoryComponent } from "./adm-list-inventory/adm-list-inventory.component";
import { AdmNewInventoryComponent } from "./adm-new-inventory/adm-new-inventory.component";
import { AdmUsersComponent } from "./adm-users/adm-users.component";
import { AdmEditInventoryComponent } from "./adm-edit-inventory/adm-edit-inventory.component";
import { DeactivateGuard } from "src/app/guards/deactivate.guard";

export const adminPages = [
    AdmCategoryComponent,
    AdmListInventoryComponent,
    AdmNewInventoryComponent,
    AdmUsersComponent,
    AdmEditInventoryComponent
];

export const adminPageRoutes: Routes = [
    { path: 'new-inventory', component: AdmNewInventoryComponent, canDeactivate:[DeactivateGuard] },
    { path: 'edit-inventory/:id', component: AdmEditInventoryComponent },
    { path: 'list-inventory', component: AdmListInventoryComponent },
    { path: 'category', component: AdmCategoryComponent },
    { path: 'users', component: AdmUsersComponent },
];