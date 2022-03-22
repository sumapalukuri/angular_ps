import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as data from '../../mockdata/products.json';
import { environment } from 'src/environments/environment';
import * as marklist from '../../mockdata/marklist.json';

const PRODUCTS_URL = `${environment.backendUrl}/products`;
const MARKS_URL = `${environment.backendUrl}/markslist`;

@Injectable()
export class HttpMockInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url === PRODUCTS_URL) {
      return of(new HttpResponse({ status: 200, body: ((data) as any).default }));
  } else if(request.url === MARKS_URL) {
      return of(new HttpResponse({ status: 200, body: ((marklist) as any).default }));
  }
    return next.handle(request);
  }
}
