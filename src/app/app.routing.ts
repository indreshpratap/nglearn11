import { Routes } from '@angular/router';
import { ConditionalComponent } from './examples/conditional.component';
import { PropertyBindingComponent } from './examples/property-binding.component';
import { ContainerComponent } from './examples/container.component';
import { InputComponent } from './examples/input.component';
import { InterpolationComponent } from './examples/interpolation.component';
import { NgForComponent } from './examples/ngfor.component';

export const routes: Routes = [
    { path: "conditional", component: ConditionalComponent },
    { path: 'property-binding', component: PropertyBindingComponent },
    { path: 'container', component: ContainerComponent },
    { path: 'input', component: InputComponent },
    { path: 'interpolation', component: InterpolationComponent },
    { path: 'ngfor', component: NgForComponent }
]