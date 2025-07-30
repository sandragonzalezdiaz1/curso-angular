import { Routes } from '@angular/router';
import { Products } from './pages/products/products';
import { AboutUs } from './pages/about-us/about-us';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: 'products', component: Products},
    { path: 'about-us', component: AboutUs},
    { path: '' , redirectTo: '/products', pathMatch: 'full'},
    { path: '**', component: NotFound}
];
