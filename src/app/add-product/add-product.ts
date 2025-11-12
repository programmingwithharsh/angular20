import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-product',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.scss',
})
export class AddProduct implements OnInit {
  productForm!: FormGroup;
  products: any[] = [];

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productCode: ['', Validators.required],
      releaseDate: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      starRating: ['', Validators.required],
      imageUrl: [''],
    });

    // load from localstorage 
    const saveProducts = localStorage.getItem("products");
    // JSON.parse - convert string into object
    this.products = saveProducts ? JSON.parse(saveProducts) : [];
  }

  onSubmit() {
    if (this.productForm.valid) {
      alert("Form is submitted");
      console.log(this.productForm.value);
      // const newProduct = this.productForm.value;
      const newProduct = {
        productId: this.products.length > 0 ? this.products[this.products.length - 1].productId + 1 : 1,
        ...this.productForm.value
      }
      this.products.push(newProduct); // add item in array
      // JSON.stringify - convert object into string
      // store item in localstorage, key and value pair
      localStorage.setItem("products", JSON.stringify(this.products)); // key and value pair
    }
  }
}
