import { Routes } from '@angular/router';
import { ProductDetail } from './product-detail/product-detail';
import { productDetailGuard } from './product-detail-guard';
import { ProductList } from './product-list/product-list';
import { AddProduct } from './add-product/add-product';

export const PROUDCT_ROUTES: Routes = [
    { path: '', component: ProductList },
    { path: 'addproduct', component: AddProduct }, // static 
    { path: ':id', canActivate: [productDetailGuard], component: ProductDetail }, // Dynamic url
];
