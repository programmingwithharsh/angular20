import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgStyle } from '@angular/common';
import { Highlight } from '../highlight';

@Component({
  selector: 'app-welcome', // name of the component
  imports: [NgStyle, Highlight],
  templateUrl: './welcome.html',
  styleUrl: './welcome.scss',
})
export class Welcome {

  price = 200;
  constructor(private router: Router) {

  }

  goToProducts() {
    this.router.navigate(['/products']);
  }
}
