import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiClient } from 'src/app/services/api.client';
import { InventoryFormComponent } from '../../components/inventory-form/inventory-form.component';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-adm-edit-inventory',
  templateUrl: './adm-edit-inventory.component.html',
  styleUrls: ['./adm-edit-inventory.component.scss']
})
export class AdmEditInventoryComponent implements OnInit {

  @ViewChild(InventoryFormComponent) inventoryForm: InventoryFormComponent;

  currentId;
  current;

  constructor(
    private activatedRoute: ActivatedRoute,
    private api: ApiClient,
    private toast: ToastService,
    private router:Router
  ) { }

  ngOnInit() {
    this.currentId = this.activatedRoute.snapshot.params.id;
    this.fetchInventory();
  }


  fetchInventory() {
    this.api.get("admin/inventory/" + this.currentId).subscribe(res => {
      this.current = res.data;
      this.inventoryForm.setForUpdate(this.current);
    });
  }

  save(data) {
    data.id = this.current._id;
    this.api.post('admin/save-inventory', data).subscribe(res => {
      this.toast.successOnly("Inventory Saved");
     this.router.navigateByUrl('/home/admin/list-inventory');
    },(err)=>{
      this.toast.errorSticky("Error","Failed to update!");
    });
  }
}
