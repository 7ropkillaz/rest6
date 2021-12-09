import {Component, OnInit} from '@angular/core';
import {AuthorizeService} from "../../services/authorize.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthorize: boolean = false;

  constructor(private authService: AuthorizeService) {
    this.isAuthorize = authService.isAuthorize();
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

}
