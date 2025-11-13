import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  count = signal(0); // initial value is 0

  increase() {
    this.count.update(c => c + 1);
  }

  totalCount = computed(() => this.count()); // calculate signal -> auto recalculates when count changes

  add(num: number) {
    this.count.update(v => v + num);
  }

  reset() {
    this.count.set(0);
  }
}
