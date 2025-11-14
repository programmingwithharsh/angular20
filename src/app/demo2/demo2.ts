import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared-service';
@Component({
  selector: 'app-demo2',
  imports: [],
  templateUrl: './demo2.html',
  styleUrl: './demo2.scss',
})
export class Demo2 implements OnInit {
  receivedName = '';
  receivedAge: number = 0;

  constructor(private shared: SharedService) {

  }

  ngOnInit(): void {
    // Subject 
    this.shared.usernameSubject.subscribe(name => {
      this.receivedName = name;
      console.log('Subject received ', name);
    })

    // Behavior Subject
    this.shared.ageBehavior.subscribe(age => {
      this.receivedAge = age;
      console.log('Behavior Subject received ', age);
    })
  }


}
