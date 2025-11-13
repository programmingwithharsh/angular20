import { Component, OnInit, signal } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConverToSpacesPipe } from '../conver-to-spaces-pipe';
import { ProductService } from '../product-service';
import { Star } from '../star/star';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product-list',
  imports: [NgIf, NgFor, FormsModule, UpperCasePipe, LowerCasePipe, ConverToSpacesPipe, Star, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  pageTitle = "Product List"; // property
  listFilter: string = "cart";
  showImage: boolean = false;
  errorMessage = '';
  title = signal('dashboard');

  products: any[] = []; // any data type

  constructor(private productServ: ProductService) { // calling service
    console.log("constructor");
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productServ.getProducts().subscribe({
      next: products => {
        this.products = products;
      },
      error: err => this.errorMessage = err
    })
    console.log("ngOnInit");
  }

  onRatingClicked(message: string) {
    this.pageTitle = message;
  }
}
