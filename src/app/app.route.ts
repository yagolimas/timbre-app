import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoresComponent } from './stores/stores.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';

export const ROUTES : Routes = [
    { path: '', component: HomeComponent },
    { path: 'stores', component: StoresComponent },
    { path: 'stores/:id', component: StoreDetailComponent },
    { path: 'about', component: AboutComponent }
]