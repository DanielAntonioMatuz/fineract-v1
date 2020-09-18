/** Angular Imports */
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';
import {environment, environmentTest} from '../../environments/environment';

// tslint:disable-next-line:no-unused-expression
@Injectable()
// tslint:disable-next-line:class-name
export class crudService {
  URL = 'http://34.207.132.190/';
  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  getBenefactorList(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.URL + 'api/benefactor-list/?format=json');
  }

  createBenefactor(Benefactor: Object): Observable<Object> {
    // @ts-ignore
    return this.http.post(this.URL + 'api/benefactor-create/', Benefactor);
  }
}
