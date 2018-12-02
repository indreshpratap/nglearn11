import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html'

})
export class TodoComponent implements OnInit {

    simpleTodo = [];
    simpleDeletedTodo = [];

    objectTodo = [];
    constructor() { }

    ngOnInit(): void {

    }

    addSimple(input) {
        this.simpleTodo.push(input.value);
        input.value = '';
    }

    markDoneSimple(indx) {
        this.simpleDeletedTodo.push(this.simpleTodo[indx]);
        this.simpleTodo.splice(indx, 1);
    }

    addBackToTodo(indx) {
        this.simpleTodo.push(this.simpleDeletedTodo[indx]);
        this.permanentlyRemove(indx);
    }

    permanentlyRemove(indx) {
        this.simpleDeletedTodo.splice(indx, 1);
    }

    addTodoObject(input) {
        this.objectTodo.push({
            label: input.value,
            checked: false,
            done: false
        });
        input.value = '';
    }

    toogleSelection(chkAll) {
        let value = chkAll.checked;
        this.objectTodo.forEach(item => {
            item.checked = value;
        })
    }

    markDoneSelected() {
        this.objectTodo.forEach(item => {
            if (item.checked) {
                item.done = true;
            }
        })
    }

    deleteSelected() {
        this.objectTodo = this.objectTodo.filter(item => !item.checked);
    }

    toogle(todo) {
        todo.checked = !todo.checked
    }
    remove(indx) {
        this.objectTodo.splice(indx, 1);
    }
}
