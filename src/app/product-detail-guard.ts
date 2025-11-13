import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const productDetailGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const id = Number(route.paramMap.get('id'));

  if (isNaN(id) || id < 1) {
    alert(`Invalid product id`);
    router.navigate(['/products']);
    return false
  }
  return true;
};
