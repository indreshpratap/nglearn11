import { FoInvoiceComponent } from "./fo-invoice/fo-invoice.component";
import { FoOrderProcessComponent } from "./fo-order-process/fo-order-process.component";
import { Routes } from "@angular/router";

export const foPages = [
    FoInvoiceComponent,
    FoOrderProcessComponent
];


export const foPageRoutes:Routes = [
    {path:'process-order',component:FoOrderProcessComponent},
    {path:'invoice',component:FoInvoiceComponent}
];