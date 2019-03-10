import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {

  @Input() category;
  @Input() parent;
  @Output() onSelection = new EventEmitter<any>();
  private _currentCategory;
  constructor() { }

  ngOnInit() {
   // this._currentCategory = {...this.category};
    this.category.parent = this.parent;
  }

  onSelect(){
    this.onSelection.emit({category:this.category});
  }

}
