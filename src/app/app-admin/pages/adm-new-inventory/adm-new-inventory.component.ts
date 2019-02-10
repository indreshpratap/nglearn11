import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-adm-new-inventory',
  templateUrl: './adm-new-inventory.component.html',
  styleUrls: ['./adm-new-inventory.component.scss']
})
export class AdmNewInventoryComponent implements OnInit {

  productForm: FormGroup;
  features: FormArray;
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
      name: [null, [Validators.required, Validators.maxLength(2)]],
      originalPrice: [0, [Validators.required, Validators.min(1), Validators.max(500000)]],
      discountPrice: [0, [Validators.required, Validators.min(1), Validators.max(500000)]],
      description: [null, [Validators.required, Validators.maxLength(200)]],
      quantity: [1, [Validators.required, Validators.min(0), Validators.max(2000)]],

      details: this.fb.group({
        detailDescription: [],
        features: this.features
      })

    })
  }

  addFeature() {
    //  let features =  (this.productForm.get('details').get('features') as FormArray);
    this.features.push(
      this.fb.group({
      label: [, Validators.required],
      description: [, Validators.required]
    }))
  }

  removeFeature(index) {
    if (confirm("Are you sure?")) {
      this.features.removeAt(index);
    }
  }

}
