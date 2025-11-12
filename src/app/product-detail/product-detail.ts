import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail implements OnInit {
  constructor(private productServ: ProductService) { // calling service
    console.log("constructor");
  }

  ngOnInit(): void {
    this.productServ.getProducts();
  }
}
