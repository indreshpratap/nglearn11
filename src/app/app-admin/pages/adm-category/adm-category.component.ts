import { Component, OnInit, AfterContentInit, AfterViewInit, DoCheck } from '@angular/core';
import { LocStorage } from '../../../services/storage.service';


@Component({
  selector: 'app-adm-category',
  templateUrl: './adm-category.component.html',
  styleUrls: ['./adm-category.component.scss']
})
export class AdmCategoryComponent implements OnInit, AfterContentInit, AfterViewInit,DoCheck {
  
  categories = [];
  currentCategory;
  isSaveAsSubCategory = false;
  readonly STORAGE_KEY = '11_categories';
  constructor() {
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
      LocStorage.storeJson(this.STORAGE_KEY, this.categories);
    }
  }

  addSubCategory(category) {
    this.currentCategory = category;
    this.isSaveAsSubCategory = true;
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
