import { createAction, props } from '@ngrx/store';
import { Category } from '../categories.model';

export const loadCategories = createAction(`[Category] Load`);

export const loadCategoriesSuccess = createAction(`[Category] Load Success`, props<{ categories: Category[] }>()
);

export const loadCategoriesFailure = createAction(`[Category] Load Failure`, props<{ error: string }>()
);