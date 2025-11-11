import { Component, signal } from '@angular/core';
import { Welcome } from './welcome/welcome';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { Star } from './star/star';
import { Title } from './title/title';
import { About } from './about/about';
import { Hello } from './hello/hello';

@Component({
  selector: 'app-root',
  imports: [Welcome, ProductList, ProductDetail, Star, Title, About, Hello],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('dashboard');
}
