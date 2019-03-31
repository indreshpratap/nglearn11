import { Component, OnInit, AfterContentInit, AfterViewInit, DoCheck } from '@angular/core';
import { LocStorage } from '../../../services/storage.service';

import{cloneDeep} from 'lodash';
import { ApiClient } from 'src/app/services/api.client';
@Component({
  selector: 'app-adm-category',
  templateUrl: './adm-category.component.html',
  styleUrls: ['./adm-category.component.scss']
})
export class AdmCategoryComponent implements OnInit, AfterContentInit, AfterViewInit,DoCheck {
  
  categories = [];
  copyOfCategories = [];
  currentCategory;
  isSaveAsSubCategory = false;
  parentStr;
  readonly STORAGE_KEY = '11_categories';
  constructor(private api:ApiClient) {
  }
  
  ngOnInit() {
    this.getCategories();
    console.log("ng onInit for AdmCategoryComponent");
  }
  
  ngDoCheck(): void {
    console.log("ng doCheck for AdmCategoryComponent");
  }
  ngAfterContentInit() {
    console.log("ng After content init AdmCategoryComponent");
  }

  ngAfterViewInit() {
    console.log("ng After view init AdmCategoryComponent");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy AdmCategoryComponent");
  }

  save(form) {
    if (form.value.category) {
      
      //!saving sub category
      if (this.isSaveAsSubCategory && this.currentCategory) {
        // checking if there is children array or not if not there add a blank array.
        this.currentCategory.children = this.currentCategory.children
          ? this.currentCategory.children : [];

        this.currentCategory.children.push({ name: form.value.category });
      } else {
        // saving a master category
        this.categories.push({ name: form.value.category });
      }
      form.control.reset();
      // this.store();
      this.saveToDB();
    }
  }


  saveToDB(){
    let data = this.cleanCategory();
    this.api.post('admin/save-category',data).subscribe(res=>{

    });
  }
  store() {
   
    LocStorage.storeJson(this.STORAGE_KEY, this.cleanCategory());
  }


  cleanCategory(){
    let copyCat = cloneDeep(this.categories);
    copyCat.forEach(item=>{
      this.clearParent(item);
    });
    return copyCat;
  }
  clearParent(item) {
    delete item.parent;
    if(item.children){
      item.children.forEach(element => {
        this.clearParent(element);
      });
    }
  }
  
extractParent(item,end) {
  if(item.parent){
    return  this.extractParent(item.parent, item.parent.name+'/'+end);
  }else {
    return end;
  }
}


  addSubCategory(selection) { // {category:any, parent:any}
    this.currentCategory = selection.category;
    this.isSaveAsSubCategory = true;
    this.parentStr = this.extractParent(selection.category, selection.category.name);
  }


  cancel() {
    this.currentCategory = null;
    this.isSaveAsSubCategory = false;
  }

  getCategories() {
    let loadedCats = LocStorage.getJson(this.STORAGE_KEY);
    console.log("Saved categories", loadedCats);
    if (loadedCats) {
      this.categories = loadedCats;
    }
  }


  
}
