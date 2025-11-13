import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Counter {
  count = signal(0);

  increase() {
    this.count.update(c => c + 1);
  }

  reset() {
    this.count.set(0);
  }

}
