import {Component, OnInit} from '@angular/core';
import {AuthorizeService} from "../../services/authorize.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private authService: AuthorizeService) {

  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (data: boolean) => {
        if(data) {
          window.location.href = "/";
        } else {
          alert("No valid login or password");
        }
      }

    )
  }

}
