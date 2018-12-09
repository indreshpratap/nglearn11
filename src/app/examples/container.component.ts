import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styles:['span[highlight] { border-bottom:1px dotted;}']
})
export class ContainerComponent {
    items;
    constructor() {
        this.items = [
            { name: 'line item1', category: 'A' },
            { name: 'line item2', category: 'A' },
            { name: 'line item3', category: 'B' },
            { name: 'line item4', category: 'A' },
            { name: 'line item5', category: 'C' },
        ]
    }

    save() {
        alert('Content saved');
    }
}