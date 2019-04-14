import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  totalItems = 0;
  cartChangeSub$;
  constructor(private cartService: CartService) { }

  ngOnInit() {

    this.cartChangeSub$ = this.cartService.onCartChange()
      .subscribe(items => {
        this.totalItems = items.length;
      });
  }

  ngOnDestroy() {
    if (this.cartChangeSub$) {
      this.cartChangeSub$.unsubscribe();
    }
  }

}
