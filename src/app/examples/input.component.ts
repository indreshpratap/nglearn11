import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html'
})
export class InputComponent {

    show = true;
    closeIt() {
        console.log("Request received for closing");
        this.show = false;
    }
 
}
