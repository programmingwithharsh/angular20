import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCategories } from '../store/categories.actions';
import { selectAllCategories, selectCategoryLoading } from '../store/categories.selectors';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-category-list',
  imports: [NgIf, NgFor, AsyncPipe],
  templateUrl: './category-list.html',
  styleUrl: './category-list.scss',
})
export class CategoryList implements OnInit {

  categories$;
  loading$;

  constructor(private store: Store) {
    this.categories$ = this.store.select(selectAllCategories);
    this.loading$ = this.store.select(selectCategoryLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCategories()); // calling action
  }
}
