import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  apiUrl = './src/doctors-list.json';

  // getDetails(httpOptions: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, httpOptions);
  // }

  getDetails(): Observable<any> {
    return this.http.get('./doctors-list.json');
  }
}
