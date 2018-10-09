import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      return next.handle(req).pipe(
        tap((res: any) => {
          if (res instanceof HttpResponse) {

          }
        }, error => {
          console.error('SERVER ERROR CODE: ', error.status);
          console.error('SERVER ERROR MESSAGE: ', error.message);
        })
      );
  }
}
