import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

 constructor(
    private http: HttpClient
 ) {}

  public gerNavbarLinks( queryParams?: any): Observable<any> {
    const url = '../../../assets/mocks/navigationLinks.json';
    return this.http.get<any>(url, { params: queryParams });
 }


}
