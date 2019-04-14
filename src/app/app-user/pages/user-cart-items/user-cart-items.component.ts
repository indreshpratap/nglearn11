import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-cart-items',
  templateUrl: './user-cart-items.component.html',
  styleUrls: ['./user-cart-items.component.scss']
})
export class UserCartItemsComponent implements OnInit {

  imagePath = environment.apiPath+'assets/images/';
  constructor(public cart:CartService) { }

  ngOnInit() {
  }

}
