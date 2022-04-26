import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ToasterService } from 'src/app/shared/service/toastr.service';

@Injectable()
export class GlobalErrorHandler implements HttpInterceptor {

  constructor(
    private _toasterService: ToasterService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(eve => {
        if(eve instanceof HttpResponse) {
            this._toasterService.showSuccess('Data loaded successfully');
        }
      }),
      catchError(error => {
      let errorMessage = "";
        if(error instanceof HttpErrorResponse) {
        switch(error.status) {
          case 404: {
            errorMessage = "Data not found";
            break;
          }
          case 401: {
            errorMessage = "The server could not verify the user";
            break;
          }
          case 400: {
            errorMessage = "The page isn't working at the moment";
            break;
          }
          case 500: {
            errorMessage = "Services are down. Please try again after sometime";
            break;
          }
          default: {
            errorMessage = "Something went wrong. Please try again after sometime";
            break;
          }
        }
      } else {
        errorMessage = "Something went wrong. Please try again";
      }
      return throwError(() => errorMessage);
    }))
  }
}
