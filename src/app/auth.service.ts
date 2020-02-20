import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';

interface myData {
  success: boolean,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  getUserDetails(username, password) {
    //posts theses details to API server return user info if correct
    return this.http.post<myData>('/api/auth.php', {
      username,
      password
    })
  }

  registerUser(username, password) {
    return this.http.post('/api/register', {
      username,
      password
    })
  }
}
