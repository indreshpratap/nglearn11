import { SeqService } from "./seq.service";
import { Injectable } from "@angular/core";


@Injectable()
export class ApiService {

    constructor(private seqService:SeqService){}
    getItems(){
        return [
            { name: 'line item1', category: 'A',id:this.seqService.next() },
            { name: 'line item2', category: 'A',id:this.seqService.next() },
            { name: 'line item3', category: 'B',id:this.seqService.next() },
            { name: 'line item4', category: 'A',id:this.seqService.next() },
            { name: 'line item5', category: 'C',id:this.seqService.next() },
            { name: 'line item 6', category: 'A',id:this.seqService.next() },
        ]
    };

    getColors() {
        return ['Blue','Green','Black','White'];
    }


}