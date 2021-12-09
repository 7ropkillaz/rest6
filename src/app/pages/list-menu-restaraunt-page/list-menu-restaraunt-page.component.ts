import {Component, OnInit} from '@angular/core';
import {Menu} from "../../models/Menu";
import {Restaurant} from "../../models/Restaurant";
import {TypeMenu} from "../../models/TypeMenu";
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {Subscription} from "rxjs";
import {AuthorizeService} from "../../services/authorize.service";

@Component({
  selector: 'app-list-menu-restaraunt-page',
  templateUrl: './list-menu-restaraunt-page.component.html',
  styleUrls: ['./list-menu-restaraunt-page.component.css']
})
export class ListMenuRestarauntPageComponent implements OnInit {

  public menus!: Menu[];
  public restaurant!: Restaurant;
  private restaurantId: any;
  private routeSubscription: Subscription;

  public isAuthorize: boolean = false;

  constructor(private route: ActivatedRoute, private httpService: HttpService, auth: AuthorizeService) {
    this.isAuthorize = auth.isAuthorize();
    this.routeSubscription = route.params.subscribe(params => this.restaurantId = params['id']);
    if (this.restaurantId != null) {
      this.httpService.getMenusByRestaurant(new Restaurant(this.restaurantId, "", "")).subscribe(
        (data) => {
          this.menus = data;
        }, error => {
          alert("Error")
        }
      );
      this.httpService.getRestaurantById(this.restaurantId).subscribe(
        (data) => {
          this.restaurant = data;
        }
      )
    } else {
      window.location.href = '/';
    }
  }

  ngOnInit(): void {
    console.log(this.menus);
  }

  editMenu(id: number) {
    window.location.href = '/menu/' + id;
  }
}
