import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-errors',
  templateUrl: './input-errors.component.html',
  styleUrls: ['./input-errors.component.scss']
})
export class InputErrorsComponent implements OnInit {

  @Input() control:FormControl;
  @Input() label:string;
  @Input() messages:any;
  constructor() { }

  ngOnInit() {
  }

  getKeys() {
    return Object.keys(this.control.errors);
  }

  getLabel() {
    return this.label||'Field';
  }


  getMessage(key) {
    if(this.messages && this.messages[key]){
      return this.messages[key];
    }else {
      return this.defaultMessage(key);
    }
  }

  private defaultMessage(key) {
    console.log(this.control.errors);
    switch(key) {
      case 'required': return `${this.getLabel()} is required`; 
      case 'minlength': return `${this.getLabel()} minimum length is ${this.control.errors[key]['requiredLength']}`; 
      case 'pattern': return `${this.getLabel()} pattern mismatch `; 
      case 'min': return `${this.getLabel()} minimum value can be ${this.control.errors[key]['min']}`; ; 
      case 'max': return `${this.getLabel()} maximum value can be ${this.control.errors[key]['max']}`; ; 
      case 'maxlength': return `${this.getLabel()} max length is ${this.control.errors[key]['requiredLength']}`; 
      default: break;
    }
  }

}
