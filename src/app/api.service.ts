import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Posts } from './models/posts'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:8080/ListPosts'
  
  constructor(private http: HttpClient) {
     
   }

   httpOptions = {
     headers: new HttpHeaders({'Content-Type': 'application/json'})
   }

   getPosts(): Observable<Posts[]>{
      return this.http.get<Posts[]>(this.url);
   }
    
}