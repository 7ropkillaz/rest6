import { Component, OnInit } from '@angular/core';
import {Dish} from "../../models/Dish";
import {Menu} from "../../models/Menu";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {TypeMenu} from "../../models/TypeMenu";
import {Restaurant} from "../../models/Restaurant";
import {TypeDish} from "../../models/TypeDish";

@Component({
  selector: 'app-dish-page',
  templateUrl: './dish-page.component.html',
  styleUrls: ['./dish-page.component.css']
})
export class DishPageComponent implements OnInit {

  dish!: Dish;
  menus!: Menu[];
  types!: TypeDish[];
  private dishId: any;
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
    this.routeSubscription = route.params.subscribe(params => this.dishId = params['dish_id']);

    this.httpService.getAllMenus().subscribe(
      (data) => {
        this.menus = data;
      }, error => alert('Error')
    );

    this.httpService.getAllTypeDishes().subscribe(
      (data) => {
        this.types = data;
        console.log(this.types);
      }, error => alert('Error')
    );

    if(this.dishId != null && this.dishId > -1) {
      this.httpService.getDishById(this.dishId).subscribe(
        (data) => this.dish =data,
        error => alert('Error')
      );
    } else {
      this.dish = new Dish(-1, '', '', '', '', new Menu(0, '', new TypeMenu(0, ''), '', new Restaurant(-1, '', '')), new TypeDish(0,'',''));
    }

  }

  ngOnInit(): void {
  }

  save() {
    console.log(this.dish);
    if(this.dish.id > 0) {
      this.httpService.updateDish(this.dish).subscribe(
        (data) => {
          alert('Dish success updated');
          window.location.href = 'restaurants/';
        }, error => alert("Error update")
      )
    } else {
      this.httpService.createDish(this.dish).subscribe(
        (data) => {
          alert('Dish success created with id: ' + data.id);
          window.location.href = 'restaurants/';
        }, error => alert("Error create")
      );
    }
  }

  delete() {
    console.log(this.dish);
    this.httpService.deleteDish(this.dish).subscribe(
      data => {
        alert('Dish success deleted');
        window.location.href = 'restaurants/';
      },
      error => {alert('error')}
    );
  }
}
