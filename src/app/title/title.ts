import { Component } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.scss',
})
export class Title {
  constructor(private counterService: Counter) {

  }

  add() {
    this.counterService.increase();
  }

}
