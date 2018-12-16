import { Injectable } from "@angular/core";

@Injectable()
export class SeqService {
    private seq = 0;

    next(){
        return ++this.seq;
    }
}