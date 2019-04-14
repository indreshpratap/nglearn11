import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn:'root'})
export class CartService {
    public cartItems = [];

    cartChange = new BehaviorSubject([]);

    onCartChange(){
        return this.cartChange.asObservable();
    }

    removeCartItemByIndex(indx){
        this.cartItems.splice(indx,1);
        this.triggerCartChange();
    }

    addToCart(item) {
        this.cartItems.push(item);
        this.triggerCartChange();
    }

    triggerCartChange(){
        this.cartChange.next(this.cartItems);
    }

    
}