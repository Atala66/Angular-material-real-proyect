import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImageGalleryService {

 constructor(
    private http: HttpClient
 ) {}

  public getImages(url: any, queryParams?: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'text/html');
    return this.http.get<any>(url, { params: queryParams });
 }


}
