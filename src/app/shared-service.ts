import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  // Subject -> does not store last value 
  usernameSubject = new Subject<string>();

  // Behavior subject -> Store last value + require initial value
  ageBehavior = new BehaviorSubject<number>(20);
}
