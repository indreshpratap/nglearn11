import { Component } from '@angular/core';

@Component({
    selector: 'app-conditional',
    templateUrl: './conditional.component.html'
})
export class ConditionalComponent {

    flag1 = true;
    stage = 0;
    toggle() {
        this.flag1 = !this.flag1;
    }
}
