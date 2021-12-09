import { Component, OnInit } from '@angular/core';
import {Dish} from "../../models/Dish";
import {Restaurant} from "../../models/Restaurant";
import {TypeMenu} from "../../models/TypeMenu";
import {Menu} from "../../models/Menu";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {AuthorizeService} from "../../services/authorize.service";

@Component({
  selector: 'app-list-dishes-menu-page',
  templateUrl: './list-dishes-menu-page.component.html',
  styleUrls: ['./list-dishes-menu-page.component.css']
})
export class ListDishesMenuPageComponent implements OnInit {

  dishes!: Dish[];
  menu!: Menu;
  private menuId: any;
  private routeSubscription: Subscription;

  public isAuthorize: boolean = false;

  constructor(private route: ActivatedRoute, private httpService: HttpService, auth: AuthorizeService) {
    this.isAuthorize = auth.isAuthorize();
    this.routeSubscription = route.params.subscribe(params => this.menuId = params['id']);
    if (this.menuId != null) {
      this.httpService.getDishByMenuId(this.menuId).subscribe(
        (data) => {
          this.dishes = data;
        }, error => {
          alert("Error")
        }
      );
      this.httpService.getMenusByMenuId(this.menuId).subscribe(
        (data) => {
          this.menu = data;
        }
      )
    } else {
      window.location.href = '/';
    }
  console.log(this.dishes);

  }

  ngOnInit(): void {
  }

  editDish(id: number) {
    window.location.href= '/dish/' + id;
  }
}
