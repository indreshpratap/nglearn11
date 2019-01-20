import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username='adminadmin';
  password;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  doLogin(loginform){
    console.log(loginform.value);
    console.log(loginform);
     this.router.navigate(['home']);
    // this.router.navigateByUrl('/home');
  }

}
