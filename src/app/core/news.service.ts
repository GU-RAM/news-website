import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  http = inject(HttpClient);
  constructor() {}

  getNews(): any {
    const params = new HttpParams({ fromString: 'name=term' });
    return this.http.request('GET', `${environment.apiURL}/search`);
  }
}
