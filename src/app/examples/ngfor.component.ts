import { Component } from '@angular/core';

@Component({
    selector: 'app-ngfor',
    templateUrl: './ngfor.component.html'
})
export class NgForComponent {
    colors = ['White', 'Green', 'Blue', 'Red'];

    lineItems;
    checkone=false;

    addColor(myinput) {
        this.colors.push(myinput.value);
        myinput.value = '';
    }

    delete(indx) {
        this.colors.splice(indx, 1);
    }

    fillItems() {
        this.lineItems = [
            { title: 'First title', desc: 'First description' },
            { title: 'Second title', desc: 'Second description' }];
    }

}
