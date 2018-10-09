import {Injectable} from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class Api {

  baseUrl = 'https://ergast.com/api/';

  constructor(private _http: HttpClient, private store: Store<any>) {}

  get<T>(name: string, params?: HttpParams | any): any {
    let queryParams = params;
    if (params && !(params instanceof HttpParams)) {
      queryParams = new HttpParams();
      for (const key of params) {
        queryParams.set(key, params[key].toString(), key);
      }
    }
    return this._http.get(this._url(name))
      .pipe(
        map((res: any) => res)
      );
  }

  post<T>(name: string, data: any, reqHeaders?: any): any {
    return this._http.post(this._url(name), data)
      // .retry(1)
      .pipe(
        map((res: any) => res)
      );
  }

  put<T>(name: string, data: any): any {
    return this._http.put(this._url(name), data)
      // .retry(1)
      .pipe(
        map((res: any) => res)
      );
  }

  patch<T>(name: string, data: any): any {
    return this._http.patch(this._url(name), data)
    .pipe(
      map((res: any) => res)
    );
  }

  delete<T>(name: string): any {
    return this._http.delete(this._url(name));
  }

  private _url(name: string): string {
    return this.baseUrl + name;
  }

}
