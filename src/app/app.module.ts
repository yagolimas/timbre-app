import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

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
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [StoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
