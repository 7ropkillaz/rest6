import {Component, OnInit} from '@angular/core';
import {Restaurant} from "../../models/Restaurant";
import {HttpService} from "../../services/http.service";
import {AuthorizeService} from "../../services/authorize.service";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  restaurants: Restaurant[] = [];
  isAuthorize: boolean = false;

  constructor(httpService: HttpService, auth: AuthorizeService) {
    this.isAuthorize = auth.isAuthorize();
    httpService.getAllRestaurants().subscribe(
      (data) => {
        this.restaurants = data;
      },
      error => {
        alert(error);
      }
    )
  }

  ngOnInit(): void {
    console.log(this.restaurants)
  }

  editRestaurant(id: number) {
    window.location.href = '/restaurant/' + id;
  }
}
