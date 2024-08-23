import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private apiUrl = 'https://api.edamam.com/api/recipes/v2';
  private appKey = 'd680609f3d8ee94a78c255b90accb69b';
  private appId = '074535cb';
  constructor(private http:HttpClient) { }

  getRecipes(query: string): Observable<any> {
    let params = new HttpParams()
      .set('type', 'public')
      .set('q', query)
      .set('app_id', this.appId)
      .set('app_key', this.appKey);

    return this.http.get<any>(this.apiUrl, { params });
  }

  getRecipeById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    const params = {
      type: 'public',
      app_id: this.appId,
      app_key: this.appKey
    };

    return this.http.get<any>(url, { params });
  }
}
