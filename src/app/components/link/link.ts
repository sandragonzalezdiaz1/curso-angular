import { Component } from '@angular/core';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [],
  templateUrl: './link.html',
  styles: [
    `.link { color: red }`,
    `.link:hover { color: blue }`
  ],
})
export class Link {

}
