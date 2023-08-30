import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post('/api/v1/auth/login', { username, password });
  }

  logout() {
    return this.http.post('/api/v1/auth/logout', {});
  }
}
