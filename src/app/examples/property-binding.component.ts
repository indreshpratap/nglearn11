import { Component } from '@angular/core';

@Component({
    selector: 'app-property-binding',
    templateUrl: './property-binding.component.html'
})
export class PropertyBindingComponent {

    customId="my-custom-div-id";
    customClass = 'has-background-info';

    sayHello(){
        alert("Hi there");
    }

    captureEvent(event){
        if(event.altKey){
        console.log(event);
        }else {
            console.log('Only works with alt');
        }
    }

}
