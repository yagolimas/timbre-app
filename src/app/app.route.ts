import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoresComponent } from './stores/stores.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';
import { MenuComponent } from './store-detail/menu/menu.component';
import { ReviewComponent } from './store-detail/review/review.component';

export const ROUTES : Routes = [
    { path: '', component: HomeComponent },
    { path: 'stores', component: StoresComponent },
    { path: 'stores/:id', component: StoreDetailComponent, 
        children:[
            { path: '', redirectTo: 'menu', pathMatch: 'full'},
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewComponent }
    ]},
    { path: 'about', component: AboutComponent }
]