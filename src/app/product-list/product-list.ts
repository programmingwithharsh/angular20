import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConverToSpacesPipe } from '../conver-to-spaces-pipe';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product-list',
  imports: [NgIf, NgFor, FormsModule, UpperCasePipe, LowerCasePipe, ConverToSpacesPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit {
  pageTitle = "Product List"; // property
  listFilter: string = "cart";
  showImage: boolean = false;

  products: any[] = []; // any data type

  constructor(private productServ: ProductService) { // calling service
    console.log("constructor");
  }

  toggleImage(): void {
    debugger;
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.products = this.productServ.getProducts(); // calling getProducts method
    console.log("ngOnInit");
  }
}
