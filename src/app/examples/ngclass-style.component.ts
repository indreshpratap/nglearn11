import { Component } from '@angular/core';

@Component({
    selector: 'app-ngclass-style',
    templateUrl: './ngclass-style.component.html'
})
export class NgClassStyleComponent {

    notificationClass;

    arrayClass = [];

    state=0;
    objClass = {
        bold: false,
        "center-it": false,
        big: false
    }

    myStyle = {
        width:'300px'
    }

    constructor() { }

    changeCls(cls) {
        this.notificationClass = cls;
    }

    addToArray(item) {
        this.arrayClass.push(item);
    }

    removeFirstFromArray() {
        this.arrayClass.splice(0, 1);
    }

    toggle(key) {
        this.objClass[key] = !this.objClass[key];
        
    }

    addStyle(inputKey,inputValue) {
        this.myStyle[inputKey.value] = inputValue.value;
        inputKey.value='';
        inputValue.value = '';
    }


}
