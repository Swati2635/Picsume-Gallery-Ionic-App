import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PicsumServiceService {
  apiUrl = environment.picsumUrl;
  constructor(private http: HttpClient) {}

  getImages(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}v2/list`);
  }

  getImageDetails(id: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}id/${id}/info`);
  }

  getSearchImage(id: any): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}id/${id}/200/300`);
  }
}
