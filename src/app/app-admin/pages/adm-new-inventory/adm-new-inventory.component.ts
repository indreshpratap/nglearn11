import { Component, OnInit, ViewChild } from '@angular/core';

import { ApiClient } from 'src/app/services/api.client';
import { ToastService } from 'src/app/services/toast.service';
import { InventoryFormComponent } from '../../components/inventory-form/inventory-form.component';
import { CanDeactivateRef } from 'src/app/can-deactivate-ref';

@Component({
  selector: 'app-adm-new-inventory',
  templateUrl: './adm-new-inventory.component.html',
  styleUrls: ['./adm-new-inventory.component.scss']
})
export class AdmNewInventoryComponent implements OnInit,CanDeactivateRef {


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

  canDeactivate(): boolean {
  return this.inventoryForm.productForm.dirty;
   }


   getMessage(){
     return "Your form input will be lost please confirm navigation";
   }

}
