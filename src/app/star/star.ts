import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [],
  templateUrl: './star.html',
  styleUrl: './star.scss',
})
export class Star implements OnChanges {
  @Input() rating = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Star component rating", this.rating);
  }
}
