import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

export const corePages = [
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    ContactUsComponent
];


export * from './home/home.component';
export * from './login/login.component';
export * from './not-found/not-found.component';
export * from './contact-us/contact-us.component';