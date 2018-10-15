import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    
})
export class HeaderComponent {

    constructor(){
        setTimeout(() => {
            this.year = 2020;
            this.title = 'Angular Application';
        }, 5000);
    }
    title="NgLearn 11 ";

    year = 2018;
}
