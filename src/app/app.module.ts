import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ROUTES } from './app.route';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoresComponent } from './stores/stores.component';
import { StoreComponent } from './stores/store/store.component';
import { StoresService } from './stores/stores.service';
import { StoreDetailComponent } from './store-detail/store-detail.component';
import { MenuComponent } from './store-detail/menu/menu.component';
import { ShoppingCartComponent } from './store-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './store-detail/menu-item/menu-item.component';
import { ReviewComponent } from './store-detail/review/review.component';
import { ShoppingCartService } from './store-detail/shopping-cart/shooping-cart.service';
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { OrderService } from './order/order.service';
import { CostsComponent } from './delivery/costs/costs.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RatingComponent } from './shared/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    StoresComponent,
    StoreComponent,
    StoreDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent,
    CostsComponent,
    OrderSummaryComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [StoresService, ShoppingCartService, OrderService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
