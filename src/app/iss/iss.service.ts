import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IssService {

  constructor(private http: HttpClient) { }

  getIssLocation(): Observable<any> {
    return this.http.get('http://localhost:8080/location');
  }

}
