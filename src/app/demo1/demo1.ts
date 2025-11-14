import { Component } from '@angular/core';
import { SharedService } from '../shared-service';
@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.scss',
})
export class Demo1 {
  constructor(private shared: SharedService) {

  }

  sendName() {
    this.shared.usernameSubject.next("Harsh");
  }

  updateAge() {
    this.shared.ageBehavior.next(35);
  }
}
