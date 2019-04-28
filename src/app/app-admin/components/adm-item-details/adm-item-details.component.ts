import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiClient } from 'src/app/services/api.client';

@Component({
  selector: 'app-adm-item-details',
  templateUrl: './adm-item-details.component.html',
  styleUrls: ['./adm-item-details.component.scss']
})
export class AdmItemDetailsComponent implements OnInit, OnChanges {

   selected;
  @Input() ref;


  constructor(private api: ApiClient) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.ref) {
      console.log(changes);
      this.fetchInventory(changes.ref.currentValue);
    }
    if (changes.selected) {
      console.log("Changes in selected only: ", changes.selected.currentValue);
    }
  }

  ngOnInit() {
    console.log("ngOnInit of item details");
  }

  fetchInventory(currentRef) {
    if(currentRef){
    this.api.get("admin/inventory/" + currentRef).subscribe(res => {
      this.selected = res.data;
    });
  }
  }


}
