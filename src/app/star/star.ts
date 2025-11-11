import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [],
  templateUrl: './star.html',
  styleUrl: './star.scss',
})
export class Star implements OnChanges {
  @Input() rating = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); // custom event

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Star component rating", this.rating);
  }
  onClick() {
    debugger
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`); // Emits an event
  }
}
