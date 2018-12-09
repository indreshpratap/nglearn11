import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.scss']
})
export class MessageComponent {

@Input()  message='This is our message';
@Input("desc") description = "";

@Output() onOk = new EventEmitter();



}
