import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  fetchAllfromAPI(): Observable<object> {
    return this._http.get('//api.tvmaze.com/shows');
  }

  getOneShow(show_id): Observable<object> {
    return this._http.get(`//api.tvmaze.com/shows/${show_id}`);
  }

  searchGenres(filter):  Observable<object> {
    console.log('from service', filter.rating, filter.genre);
    //  /search/shows?q=:query
    // return this._http.get(`http://api.tvmaze.com/search/q=${filter.genre}`);
    return this._http.get(`//api.tvmaze.com/shows`);
  }

  getStars(show_id): Observable<object>{
    return this._http.get(`//api.tvmaze.com/shows/${show_id}/cast`);
  }

}
