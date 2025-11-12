import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail implements OnInit {
  constructor(private productServ: ProductService, private route: ActivatedRoute, private router: Router) { // calling service
    console.log("constructor");
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.productServ.getProducts();
  }

  goBack() {
    this.router.navigate(['/products']);
  }
}
