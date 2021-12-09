import {Component, OnInit} from '@angular/core';
import {Restaurant} from "../../models/Restaurant";
import {HttpService} from "../../services/http.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-restaraunt-page',
  templateUrl: './restaraunt-page.component.html',
  styleUrls: ['./restaraunt-page.component.css']
})
export class RestarauntPageComponent implements OnInit {

  public restaurant!: Restaurant;
  private restaurantId: any;
  private routeSubscription: Subscription;


  constructor(private route: ActivatedRoute, private httpService: HttpService,) {
    this.routeSubscription = route.params.subscribe(params => this.restaurantId = params['restaurant_id']);

    if (this.restaurantId != null && this.restaurantId.length > 0) {
      httpService.getRestaurantById(this.restaurantId).subscribe(
        (data) => {
          this.restaurant = data;
        },
        error => {
          alert(error);
          this.restaurant = new Restaurant(0, "", "");
        }
      )
    } else {
      this.restaurant = new Restaurant(0, "", "");
    }


  }

  ngOnInit(): void {
  }

  public save(): void {
    console.log(this.restaurant);
    if (this.restaurantId > 0) {
      this.httpService.createRestaurant(this.restaurant).subscribe(
        (data) => {
          alert("Restaurant success Updated");
          window.location.href = '/restaurants';
        },
        error => {
          alert("Error created");
          console.log(error);
        }
      );
    } else {
      this.httpService.createRestaurant(this.restaurant).subscribe(
        (data) => {
          alert("Restaurant success created with id: " + data.id);
          window.location.href = '/restaurants';
        },
        error => {
          alert("Error created");
          console.log(error);
        }
      );
    }
  }

  public delete() {
    this.httpService.deleteRestaurant(this.restaurant).subscribe(
      (data: any) => {
        console.log(data);
        window.location.href = '/restaurants';
      }
    );
  }


}
