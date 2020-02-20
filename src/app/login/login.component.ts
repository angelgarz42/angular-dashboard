import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, 
              private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(e) {
    e.preventDefault();
    const target = e.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.auth.getUserDetails(username, password).subscribe(data => {
      if(data.success){
        // redirect the user to admin
        this.router.navigate(['admin']);
        this.auth.setLoggedIn(true);
      }
      else {
        window.alert(data.message);
      }
    })
  }

}