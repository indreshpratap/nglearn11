import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClient } from 'src/app/services/api.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password;

  constructor(private router: Router, private api: ApiClient) { }

  ngOnInit() {
  }

  doLogin(loginform) {
    localStorage.clear();
    console.log(loginform.value);
    console.log(loginform);
    let formData = loginform.value;
    this.api.post("/core/login", formData).subscribe((res: any) => {
      if (res.status) {
        localStorage.setItem("role", res.role);
        localStorage.setItem("username", res.username);
        localStorage.setItem("token",res.token);
        if (res.role === 'admin') {
          this.router.navigate(['home']);
        } else {
          this.router.navigate(["home"]);
        }

      } else {
        alert(res.error);
      }

    })
    // this.router.navigateByUrl('/home');
  }

}
