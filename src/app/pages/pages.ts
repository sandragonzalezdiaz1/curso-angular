//import { NgModule } from '@angular/core';
import { AboutUs } from "./about-us/about-us";
import { NotFound } from "./not-found/not-found";
import { Products } from "./products/products";


//Angular tradicional
/* @NgModule({
  declarations: [],
  imports: [
    CommonModule, 
  ]
}) */ 

export const Pages = [
  AboutUs,
  Products,
  NotFound
];

export class PagesModule { }
