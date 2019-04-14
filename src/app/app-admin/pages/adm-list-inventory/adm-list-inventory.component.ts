import { Component, OnInit } from '@angular/core';
import { PublicApiClient } from 'src/app/services/public-api.client';
import { ApiClient } from 'src/app/services/api.client';
import { ToastService } from 'src/app/services/toast.service';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-adm-list-inventory',
  templateUrl: './adm-list-inventory.component.html',
  styleUrls: ['./adm-list-inventory.component.scss']
})
export class AdmListInventoryComponent implements OnInit {
  filterForm:FormGroup;
  imagePath = environment.apiPath+'assets/images/';
  list;
  posts;
  inventory;
  copyOfInventory;
  loading= false;
  showDetails = false;
  selected;

  constructor(
    private publicApi: PublicApiClient,
    private api:ApiClient,
    private toast: ToastService,
    private fb: FormBuilder,
  public cart:CartService
    ) { }

  ngOnInit() {
    this.fetchInventory();
    this.prepareFilterForm();
    //this.fetchList();
   // this.fetchPost();
  }

  prepareFilterForm(){
    this.filterForm = this.fb.group({
      name:[],
      brand:[],
      quantity:[]
    })
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
      this.copyOfInventory = res.data;
     // this.toast.successOnly("Inventory loaded");
    })
  }

  viewDetail(item)
{
  this.selected = item;
  this.showDetails = true;
}

clear(){
  this.filterForm.reset();
  this.inventory = this.copyOfInventory;
}
filter(){
  let data = this.filterForm.value;
  let inv = this.copyOfInventory;
  if(data.name){
    let reg = new RegExp(data.name,'ig');
    inv = inv.filter(it=> reg.test(it.name)); 
  }
  if(data.brand) {
    let regBrand = new RegExp(data.brand,'ig');
    inv = inv.filter(it=> regBrand.test(it.brand));
  }
  this.inventory = inv;
}
}
