import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.log('Global Error', error);
    alert('Something went wrong! check console');
  }
}
