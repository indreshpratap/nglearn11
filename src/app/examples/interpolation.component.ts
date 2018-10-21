import { Component } from '@angular/core';

@Component({
    selector: 'app-interpolation',
    templateUrl: './interpolation.component.html'
})
export class InterpolationComponent {

    description = 'this is app';
    flag = false;
    num = 10;
    obj = { name: "Indresh" };
    colors = ['White', 'Green'];

    addNewColor(){
        this.colors.push("Blue");
    }

}
