import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Title } from '../components';
import { Avatar } from '../components';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Title, Avatar, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})

export class Header{

  pageTitle = "Mi App";

  userInfo = {
    image: 'https://i.pinimg.com/474x/bb/1c/e4/bb1ce4532c0589a85b6394934cdb1bb3.jpg',
    role: 'SALES'
  }

  constructor(){}

  //Funcion que maneja el EventEmiter
  onDataCheck(e: any){
    console.log(e);
  }


}
/* export class Header implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked{
  constructor(){
    console.log("Constructor ejecutado");
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("ngOnChanges ejecutado");
  }

  ngOnInit(): void {
      console.log("ngOnInit ejecutado");
  }

  ngDoCheck(): void {
      console.log("ngDoCheck ejecutado");
  }

   ngAfterContentInit(): void {
      console.log("ngAfterContentInit ejecutado");
  }

  ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked ejecutado");
  }

  ngAfterViewChecked(): void {
      console.log("ngAfterViewChecked ejecutado");
  }


  ngAfterViewInit(): void {
      console.log("ngAfterViewInit ejecutado");
  }

  ngOnDestroy(): void {
      console.log("ngOnDestroy ejecutado");
  }


} */
