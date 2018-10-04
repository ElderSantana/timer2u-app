import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { RequestOptions, URLSearchParams, Headers, Response } from '@angular/http/';
import { ApiHttpProvider } from './../providers/api-http.provider';
import { mapTo, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor(public http: ApiHttpProvider) {

   }

  listLogs() {
      
    let headers: Headers = new Headers()
    headers.append('Content-Type', 'application/json');
    
    let params: URLSearchParams = new URLSearchParams();
  
    let requestOptions = new RequestOptions({ headers: headers, params: params });
    return this.http
      .get(environment.baseURL + 'logs' , requestOptions).pipe(map(response => response.json()));

    
  }

  addLog(description , time) {
      
    let headers: Headers = new Headers()
    headers.append('Content-Type', 'application/json');
    
    let params = {
      description : description,
      time : time
    }
  
    let requestOptions = new RequestOptions({ headers: headers, params: params });
    return this.http
      .post(environment.baseURL + 'logs' ,  params).pipe(map(response => response.json()));

    
  }
  deleteLog(id) {
      
    let headers: Headers = new Headers()
    headers.append('Content-Type', 'application/json');
    return this.http
      .delete(environment.baseURL + 'logs/' + id ).pipe(map(response => response.json()));

    
  }

}
