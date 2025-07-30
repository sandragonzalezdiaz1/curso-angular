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
  surname = 'La puta ama';
  age = 27;
  married = true;
  address = {
    country:'SPAIN',
    city: 'Madrid',
    street: 'Monte albillo'
  }

  private dni = '54345677M';
  public nationality = 'Española';

  getDate(){
    return new Date();
  }

}
