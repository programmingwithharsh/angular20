import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const token = localStorage.getItem("token");
  const authReq = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;

  console.log("Interceptor >>>>>>>>>", authReq);
  return next(authReq).pipe(
    tap(event => {
      // log
    }),
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        localStorage.removeItem("token");
        router.navigate(['/login']);
      }
      return throwError(() => error)
    })
  )
};
