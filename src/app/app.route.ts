import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StoresComponent } from './stores/stores.component';

export const ROUTES : Routes = [
    { path: '', component: HomeComponent },
    { path: 'stores', component: StoresComponent },
    { path: 'about', component: AboutComponent }
]