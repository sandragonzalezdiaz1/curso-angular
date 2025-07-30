import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Products } from './pages/products/products';
import { AboutUs } from './pages/about-us/about-us';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  protected title = 'angular-20-app';
}
