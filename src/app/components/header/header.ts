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

  pageTitle = "SmartWatch Store";

  userInfo = {
    image: 'https://media.istockphoto.com/id/2123185822/es/foto/un-hombre-comprobando-el-primer-plano-de-un-reloj-de-pulsera.jpg?s=612x612&w=0&k=20&c=rzzcHqp_6-N_iJU1T_fRAchkiEd9eM5hg5UyusQcSFg=',
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
