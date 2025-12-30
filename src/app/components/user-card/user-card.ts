import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.css']
})
export class UserCard {

  name = 'Sandra';
  surname = 'Gonzalez';
  age = 23;
  married = true;
  address = {
    country:'SPAIN',
    city: 'Barcelona',
    street: 'Milhojas 34'
  }

  public nationality = 'Española';

  getDate(){
    return new Date();
  }

}
