import { Component } from '@angular/core';

@Component({
  selector: 'app-count',
  imports: [],
  templateUrl: './count.html',
  styleUrl: './count.scss',
})
export class Count {
  count = 0;
  inc() {
    this.count++;
  }
}
