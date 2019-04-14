import { UserCartItemsComponent } from "./user-cart-items/user-cart-items.component";
import { Routes } from "@angular/router";

export const userPages = [
    UserCartItemsComponent
]

export const userRoutes:Routes = [
    {path:'cart',component:UserCartItemsComponent}
]