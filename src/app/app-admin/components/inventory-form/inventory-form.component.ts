import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiClient } from 'src/app/services/api.client';
import { ToastService } from 'src/app/services/toast.service';
import { CanDeactivateRef } from 'src/app/can-deactivate-ref';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.scss']
})
export class InventoryFormComponent implements OnInit {
  

  productForm: FormGroup;
  features: FormArray;
  @Output() onSave = new EventEmitter<any>();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.prepareForm();
  }


  prepareForm() {
    /* this.productForm = new FormGroup({
       category: new FormControl(null),
       name: new FormControl(null, [Validators.required, Validators.maxLength(2)]),
       originalPrice: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(500000)]),
       discountPrice: new FormControl(0, [Validators.required, Validators.min(1), Validators.max(500000)]),
       description: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
       quantity: new FormControl(1, [Validators.required, Validators.min(0), Validators.max(2000)])
     });*/

    this.features = this.fb.array([]);

    this.productForm = this.fb.group({
      category: [],
      name: [null, [Validators.required, Validators.maxLength(2000)]],
      originalPrice: [0, [Validators.required, Validators.min(1), Validators.max(500000)]],
      discountPrice: [0, [Validators.required, Validators.min(1), Validators.max(500000)]],
      description: [null, [Validators.required, Validators.maxLength(300)]],
      quantity: [1, [Validators.required, Validators.min(0), Validators.max(2000)]],
      brand: [, [Validators.required]],

      details: this.fb.group({
        detailDescription: [],
        features: this.features
      })

    })
  }

  addFeature(data) {
  
    this.features.push(
      this.fb.group({
      label: [data.label, Validators.required],
      description: [data.description, Validators.required]
    }))
  }


  save() {
    if(this.productForm.valid){
      let data = this.productForm.value;
     this.onSave.emit(data);
    }
  }

  clearAfterSave(){
    this.productForm.reset();
    this.features = this.fb.array([]);
  }

  removeFeature(index) {
    if (confirm("Are you sure?")) {
      this.features.removeAt(index);
    }
  }

  setForUpdate(data) {
    this.productForm.patchValue(data);
    data.details.features.forEach(feature=>{
      this.addFeature(feature);
    })
    
  }

 

}
