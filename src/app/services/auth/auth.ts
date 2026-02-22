import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  login(mobile: string, password: string): Observable<any> {
    const payload = {
      input:"login",
      mobilenum:mobile,
      password:password,
    };
    console.log("this is payload", payload)
    console.log("this url", this.apiUrl)
    return this.http.post(`${this.apiUrl}`, payload);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}