import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TableService {

 constructor(
    private http: HttpClient
 ) {}

   public getData(url: string, params?: any): Observable<any> {
       return this.http.get<any>(url, params);
   }


}
