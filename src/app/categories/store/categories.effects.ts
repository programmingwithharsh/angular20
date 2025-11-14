import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CategoryService } from "../category-service";
import { loadCategories, loadCategoriesSuccess, loadCategoriesFailure } from "./categories.actions";
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()
export class CategoryEffects {
    loadCategories$;

    constructor(private action$: Actions,
        private categoryService: CategoryService) {
        this.loadCategories$ = createEffect(() =>
            this.action$.pipe(
                ofType(loadCategories),
                mergeMap(() =>
                    this.categoryService.getCategories().pipe(
                        map(categories => loadCategoriesSuccess({ categories })),
                        catchError(error =>
                            of(loadCategoriesFailure({ error: error.meesage }))
                        )
                    ))
            )
        )
    }
}
