import { Component, OnInit, ViewChild } from '@angular/core';

import { ApiClient } from 'src/app/services/api.client';
import { ToastService } from 'src/app/services/toast.service';
import { InventoryFormComponent } from '../../components/inventory-form/inventory-form.component';

@Component({
  selector: 'app-adm-new-inventory',
  templateUrl: './adm-new-inventory.component.html',
  styleUrls: ['./adm-new-inventory.component.scss']
})
export class AdmNewInventoryComponent implements OnInit {


@ViewChild(InventoryFormComponent) inventoryForm:InventoryFormComponent;

  constructor(private api: ApiClient, private toast: ToastService) { }

  ngOnInit() {

  }




  save(formData) {
    if (formData) {
      let data = formData;
      this.api.post('admin/save-inventory', data).subscribe(res => {
        this.toast.successOnly("Inventory Saved");
        this.inventoryForm.clearAfterSave();
      })
    }
  }


}
