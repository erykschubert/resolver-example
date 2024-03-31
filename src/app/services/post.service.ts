import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  readonly apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`);
  }

  getPost(id: string): Observable<any> {
    return this.http.get<Post>(`${this.apiUrl}/posts/${id}`);
  }
}
