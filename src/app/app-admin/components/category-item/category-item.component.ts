import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  @Input() category;
  @Output() onAdd = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
