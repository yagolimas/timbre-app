import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import { ShoppingCartService } from "../store-detail/shopping-cart/shooping-cart.service";
import { CartItem } from "../store-detail/shopping-cart/cart-item.model";
import { Order, OrderItem } from "./order.model";

import { JSON_SERVER } from '../app.api';

@Injectable()
export class OrderService {

    constructor(
                private cartService: ShoppingCartService,
                private http: Http) { }

    
    checkOrder(order: Order): Observable<string> {
        const header = new Headers();
        header.append('Content-Type', 'application/json');
        
        return this.http.post(`${JSON_SERVER}/orders`,
                               JSON.stringify(order),
                               new RequestOptions({headers: header}))
                            .map(response => response.json())
                            .map(order => order.id);
    }

    clear() {
        this.cartService.clear();
    }

    itemsValue(): number {
        return this.cartService.total();
    }

    cartItems(): CartItem[] {
        return this.cartService.items;
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item)
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem){
        this.cartService.removeItem(item);
    }
}