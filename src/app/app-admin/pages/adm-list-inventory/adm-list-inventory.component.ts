import { Component, OnInit } from '@angular/core';
import { PublicApiClient } from 'src/app/services/public-api.client';
import { ApiClient } from 'src/app/services/api.client';
import { ToastService } from 'src/app/services/toast.service';
@Component({
  selector: 'app-adm-list-inventory',
  templateUrl: './adm-list-inventory.component.html',
  styleUrls: ['./adm-list-inventory.component.scss']
})
export class AdmListInventoryComponent implements OnInit {

  list;
  posts;
  inventory;
  loading= false;
  showDetails = false;
selected;

  constructor(
    private publicApi: PublicApiClient,
    private api:ApiClient,
    private toast: ToastService
    ) { }

  ngOnInit() {
    this.fetchInventory();
    //this.fetchList();
   // this.fetchPost();
  }

  fetchList() {
    this.loading = true;
    this.list = null;
    setTimeout(() => {
      this.publicApi.get('users')
      .subscribe((res: any) => {
        this.loading = false;
        this.list = res.data;
      }, (err) => {
        this.loading = false;
        console.warn("Error while fetching list", err);
      }, () => {
        console.log("Request completed");
      })
    }, 1000);
  }

  fetchPost() {
    this.publicApi.get('posts')
      .subscribe((res: any) => {
        this.posts = res.data;
      }, (err) => {
        console.warn("Error while fetching list", err);
      }, () => {
        console.log("Request completed");
      })
  }


  fetchInventory(){
    this.api.get("admin/inventory").subscribe(res=>{
      this.inventory = res.data;
     // this.toast.successOnly("Inventory loaded");
    })
  }

  viewDetail(item)
{
  this.selected = item;
  this.showDetails = true;
}
}
