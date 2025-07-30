import { Component, EventEmitter, Input, OnChanges, SimpleChanges, Output } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.html',
  styleUrls: ['./title.css']
})
export class Title implements OnChanges{

  @Input() title = '';
  @Output() dataFromChild = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
      this.dataFromChild.emit("Data from child component");
      
  }
}
