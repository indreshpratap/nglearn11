import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { SeqService } from '../services/seq.service';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styles:['span[highlight] { border-bottom:1px dotted;}']
})
export class ContainerComponent {
    items;
    constructor(
        private apiService:ApiService,
        private seqService: SeqService) {
        this.items =apiService.getItems();
    }

    save() {
        alert('Content saved');
    }

    getNextSeq(){
        console.log("Next =>",this.seqService.next());
    }
}